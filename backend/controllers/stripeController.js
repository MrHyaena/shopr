//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();

//Pipedrive templates
const {
  pipedriveApiCallV2,
  pipedriveApiCallV1,
} = require("../functions/pipedriveApiCall");

//Email templates and function
const { sendEmail } = require("../email/sendEmail");
const {
  emailTemplateActivateSubscription,
  emailTemplatePaymentCompleted,
} = require("../email/emailTemplates");

//Models
const Subscription = require("../models/subscriptionModel");
const User = require("../models/userModel");

//Stripe secret init
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const endpointSecret = process.env.STRIPE_WEBHOOK;

// --------------------------- CONTROLLER FUNCTIONS --------------------------------

//Creating checkout session
async function stripeCreateCheckoutSession(req, res) {
  const {
    subId,
    subFrequency,
    subName,
    subWebsite,
    userId,
    stripeCustomerId,
    itemsType,
  } = req.params;

  try {
    //Data verification
    if (!subId) {
      throw Error("Plan does not exist");
    }

    if (!subFrequency) {
      throw Error("You need to set up subFrequency");
    }

    // ---------------------- STRIPE - creating checkout session ----------------------

    //Picking right price ID based on subFrequency
    let priceId;
    switch (subFrequency.toLowerCase()) {
      case "weekly":
        priceId = process.env.PLAN_WEEKLY;
        break;
      case "biweekly":
        priceId = process.env.PLAN_BIWEEKLY;
        break;
      case "monthly":
        priceId = process.env.PLAN_MONTHLY;
        break;
      case "bimonthly":
        priceId = process.env.PLAN_BIMONTHLY;
        break;
      case "quarterly":
        priceId = process.env.PLAN_QUARTERLY;
        break;
    }

    //Creating sub description
    let description =
      "Typ předplatného: Standard // Nazev předplatného: " +
      req.body.subName +
      " // E-shop: " +
      req.body.subWebsite;
    if (itemsType == "mystery") {
      description =
        "Typ předplatného: Mystery // Nazev předplatného: " +
        subName +
        " // E-shop: " +
        subWebsite;
    }

    //Creating checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        subId: subId,
        userId: userId,
      },
      subscription_data: {
        description: description,
        metadata: { subId: subId, userId: userId },
      },
      allow_promotion_codes: true,
      consent_collection: { terms_of_service: "required" },
      customer: stripeCustomerId,
      success_url: `${process.env.PROXY_SERVER}/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.PROXY_APP}/`,
    });

    res.status(200).json(session.url);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Stripe payment success route
async function stripeCheckoutSuccessRoute(req, res) {
  //Getting session id from req query
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  try {
    // ---------------------- MONGOOSE - updating subscription to active: true ----------------------
    const subscription = await Subscription.findByIdAndUpdate(
      { _id: session.metadata.subId },
      {
        active: true,
        stripeSubId: session.subscription,
        stripeCustomerId: session.customer,
        termsAgreement: true,
      }
    );

    // ---------------------- PIPEDRIVE - updating subscription and switching pipeline stages ----------------------
    //Payload for pipedrive api
    const payload = {
      stage_id: 3,
      custom_fields: {
        //Stripe subscription id
        e4fb7e3a556ffa5f39a87863e13d9fba332c7c65:
          subscription.stripeSubId.toString(),
      },
    };

    //Pipedrive api call
    const pipeResponse = await pipedriveApiCallV2(
      "deals/" + subscription.pipedriveDealId,
      "PATCH",
      payload
    );

    // ---------------------- EMAIL - sending confirmation email ----------------------
    //Find user in database
    const user = await User.findById({ _id: subscription.userId });

    //Create email data
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = user.email;
    const subject = "Předplatné aktivováno";
    const emailBody = emailTemplateActivateSubscription(
      subscription.subName,
      subscription.subWebsite,
      process.env.PROXY_APP
    );

    //Send email for subscription activation
    sendEmail(fromEmail, toEmail, subject, emailBody);

    res.redirect(process.env.PROXY_APP);
  } catch (error) {
    console.log(error);
    res.send({ error: "Error in /success route", error: error });
  }
}

//Stripe webhook listener
async function stripeWebhookListener(req, res) {
  //Getting stripe signature for stripe verification
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = await stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  //Event - invoice payment succeeded
  if (event.type == "invoice.payment_succeeded") {
    try {
      const stripeObject = event.data.object;
      const subId = stripeObject.subscription_details.metadata.subId;

      // --------------------- MONGOOSE - updating subscription payment day -----------------
      const subscriptionStripe = await stripe.subscriptions.retrieve(
        stripeObject.subscription
      );

      //Finding next payment date
      const epoch = subscriptionStripe.current_period_end;
      const date = new Date(epoch * 1000);
      const paymentDate =
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

      //Updating subscription
      const subscription = await Subscription.findByIdAndUpdate(
        {
          _id: subId,
        },
        { nextPaymentDate: paymentDate }
      );

      // ---------------------- PIPEDRIVE - creating task when invoice is payed ----------------------
      let note;
      //Standard item type note
      if (subscription.itemsType == "standard") {
        const linkArray = await subscription.items.map((item, index) => {
          return `<p><a href='https://${item.url}' target='_blank'>Položka: ${
            index + 1
          } - Množství: ${item.amount}</a></p>`;
        });
        note = linkArray.join(" ");
      }

      //Creating payload for pipedrive api call
      const payloadTask = await {
        subject: "Vyplnit objednávku - " + subscription._id,
        type: "task",
        user_id: Number(process.env.PIPEDRIVE_ADMIN_ID),
        deal_id: Number(subscription.pipedriveDealId),
        person_id: Number(subscription.pipedrivePersonId),
        note: note,
        public_description: "Objednávka",
      };

      //Pipedrive api call
      const pipeResponseTask = await pipedriveApiCallV1(
        "activities",
        "POST",
        payloadTask
      );

      console.log("task created successfully");

      //Finding user for data
      const user = await User.findById({ _id: subscription.userId });

      // ---------------------- EMAIL - payment succeeded----------------------
      //Creating email data
      const fromEmail = process.env.SMTP_EMAIL_INFO;
      const toEmail = user.email;
      const subject = "Platba za předplatné";
      const emailBody = emailTemplatePaymentCompleted(
        subscription.subName,
        subscription.subWebsite,
        process.env.PROXY_APP
      );

      //Sending email
      sendEmail(fromEmail, toEmail, subject, emailBody);

      res.status(200).json({ message: "task created successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = {
  stripeCreateCheckoutSession,
  stripeCheckoutSuccessRoute,
  stripeWebhookListener,
};
