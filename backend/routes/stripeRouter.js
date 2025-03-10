//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Subscription = require("../models/subscriptionModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const {
  pipedriveApiCallV2,
  pipedriveApiCallV1,
} = require("../functions/pipedriveApiCall");
const { sendEmail } = require("../email/sendEmail");
const {
  emailTemplateActivateSubscription,
} = require("../email/emailTemplates");
const endpointSecret = process.env.STRIPE_WEBHOOK;

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route - creating cheackout session
router.get(
  "/activate/:userId/:subId/:subName/:subWebsite/:subFrequency/:stripeCustomerId/:itemsType",
  express.json(),
  async (req, res) => {
    const {
      subId,
      subFrequency,
      subName,
      subWebsite,
      userId,
      stripeCustomerId,
      itemsType,
    } = req.params;

    if (!subId) {
      return res.status(404).json("Plan does not exist");
    }

    if (!subFrequency) {
      return res.status(404).json("You need to set up subFrequency");
    }
    // ---------------------- STRIPE - creating checkout session ----------------------

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

    try {
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
        customer: stripeCustomerId,
        success_url: `${process.env.PROXY_SERVER}/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.PROXY_APP}/app`,
      });
      res.status(200).json(session.url);
    } catch (error) {
      res.send(400).json(error);
    }
  }
);

//stripe success
router.get("/success", express.json(), async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  // ---------------------- MONGOOSE - updating subscription to active: true ----------------------
  try {
    const subscription = await Subscription.findByIdAndUpdate(
      { _id: session.metadata.subId },
      {
        active: true,
        stripeSubId: session.subscription,
        stripeCustomerId: session.customer,
      }
    );

    // ---------------------- PIPEDRIVE - updating subscription and switching pipeline stages ----------------------
    const payload = {
      stage_id: 3,
      custom_fields: {
        //Stripe subscription id
        e4fb7e3a556ffa5f39a87863e13d9fba332c7c65:
          subscription.stripeSubId.toString(),
      },
    };
    const pipeResponse = await pipedriveApiCallV2(
      "deals/" + subscription.pipedriveDealId,
      "PATCH",
      payload
    );

    // ---------------------- EMAIL - sending confirmation email ----------------------
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = subscription.email;
    const subject = "Shopr - Předplatné aktivováno";
    const emailBody = emailTemplateActivateSubscription(subscription.subName);

    sendEmail(fromEmail, toEmail, subject, emailBody);

    res.redirect(process.env.PROXY_APP);
  } catch (error) {
    console.log(error);
    res.send({ error: "Error in /success route", error: error });
  }
});

//Stripe webhook listener
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = await stripe.webhooks.constructEvent(
        req.body,
        sig,
        endpointSecret
      );
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    if (event.type == "invoice.payment_succeeded") {
      try {
        const stripeObject = event.data.object;

        const subId = stripeObject.subscription_details.metadata.subId;
        console.log(subId);

        const subscription = await Subscription.findById(subId);

        // ---------------------- PIPEDRIVE - creating task when invoice is payed----------------------
        let note;
        //standard note
        if (subscription.itemsType == "standard") {
          const linkArray = await subscription.items.map((item, index) => {
            return `<p><a href='https://${item.url}' target='_blank'>Položka: ${
              index + 1
            } - Množství: ${item.amount}</a></p>`;
          });
          note = linkArray.join(" ");
        }

        const payloadTask = await {
          subject: "Vyplnit objednávku",
          type: "task",
          user_id: Number(process.env.PIPEDRIVE_ADMIN_ID),
          deal_id: Number(subscription.pipedriveDealId),
          person_id: Number(subscription.pipedrivePersonId),
          note: note,
          public_description: "Objednávka",
        };

        const pipeResponseTask = await pipedriveApiCallV1(
          "activities",
          "POST",
          payloadTask
        );

        console.log("task created successfully");

        res.status(200).json({ message: "task created successfully" });
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    }
  }
);

module.exports = router;
