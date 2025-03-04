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
const endpointSecret = process.env.STRIPE_WEBHOOK;

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route - creating cheackout session
router.get(
  "/activate/:userId/:subId/:subName/:subWebsite/:subFrequency/:stripeCustomerId",
  express.json(),
  async (req, res) => {
    const {
      subId,
      subFrequency,
      subName,
      subWebsite,
      userId,
      stripeCustomerId,
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
          description:
            "Název předplatného: " + subName + " // E-shop: " + subWebsite,
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

    // ---------------------- PIPEDRIVE - creating task ----------------------
    const linkArray = await subscription.items.map((item) => {
      return `<p><a href='https://${item.url}' target='_blank'>${item.url}</a></p>`;
    });

    const note = linkArray.join(" ");

    const payloadTask = await {
      subject:
        "Vyplnit objednávku - " +
        subscription.firstName +
        " " +
        subscription.secondName,
      type: "task",
      user_id: Number(process.env.PIPEDRIVE_ADMIN_ID),
      deal_id: Number(subscription.pipedriveDealId),
      person_id: Number(subscription.pipedrivePersonId),
      note: note,
    };

    const pipeResponseTask = await pipedriveApiCallV1(
      "activities",
      "POST",
      payloadTask
    );

    console.log(pipeResponseTask);

    res.redirect(process.env.PROXY_APP);
  } catch (error) {
    console.log(error);
    res.send({ error: "Error in /success route", error: error });
  }
});

//stripe customer portal
router.get("/portal/:stripeCustomerId", express.json(), async (req, res) => {
  const { stripeCustomerId } = req.params;
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: process.env.PROXY_APP,
    });
    res.status(200).json(portalSession.url);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Stripe webhook listener
//router.post(
//  "/webhook",
//  express.raw({ type: "application/json" }),
//  async (req, res) => {
//    const sig = req.headers["stripe-signature"];
//
//    let event;
//
//    try {
//      event = await stripe.webhooks.constructEvent(
//        req.body,
//        sig,
//        endpointSecret
//      );
//    } catch (err) {
//      res.status(400).send(`Webhook Error: ${err.message}`);
//      return;
//    }
//
//    const stripeObject = event.data.object;
//
//    // Handle the event
//    if (event.type == "customer.subscription.updated") {
//      try {
//        //Update subscription according to stripe status
//        const subActive = !stripeObject.cancel_at_period_end;
//
//        // ---------------------- MONGOOSE - updating activ: false ----------------------
//        const subscription = await Subscription.findOneAndUpdate(
//          { stripeSubId: stripeObject.id },
//          { active: subActive }
//        );
//
//        if (!subActive) {
//          // ---------------------- PIPEDRIVE - updating stage ----------------------
//          const payload = {
//            stage_id: 2,
//          };
//          const pipeResponse = await pipedriveApiCallV2(
//            "deals/" + subscription.pipedriveDealId,
//            "PATCH",
//            payload
//          );
//
//          const pipeDeal = await pipeResponse.json();
//
//          // ---------------------- PIPEDRIVE - deleting tasks ----------------------
//
//          const pipeActivities = await pipedriveApiCallV2("activities", "GET");
//
//          const activitiesJson = await pipeActivities.json();
//
//          const activitiesForDeletion = await activitiesJson.data.filter(
//            (item) =>
//              item.done == false &&
//              item.deal_id == subscription.pipedriveDealId &&
//              item.is_deleted == false
//          );
//
//          const activitiesIds = activitiesForDeletion.map((item) => {
//            return item.id;
//          });
//
//          const idsJoin = activitiesIds.join(",");
//
//          const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV1(
//            "activities?ids=" + idsJoin,
//            "DELETE"
//          );
//        }
//
//        res.status(200).json({ isActivated: subActive });
//      } catch (error) {
//        console.log(error);
//        res.status(400).json({ error: error.message });
//      }
//    }
//  }
//);

//update subscription

module.exports = router;
