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

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route
router.get(
  "/activate/:userId/:subId/:subFrequency/:stripeCustomerId",
  async (req, res) => {
    const { subId, subFrequency, userId, stripeCustomerId } = req.params;
    console.log(stripeCustomerId);

    //CustomerId check
    let customerId = "none";
    if (stripeCustomerId !== "none") {
      customerId = stripeCustomerId;
    }

    if (!subId) {
      return res.status(404).json("Plan does not exist");
    }

    if (!subFrequency) {
      return res.status(404).json("You need to set up subFrequency");
    }

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

    if (customerId === "none") {
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
          success_url: `${process.env.PROXY_SERVER}api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.PROXY_APP}app`,
        });
        res.status(200).json(session.url);
      } catch (error) {
        res.send(400).json(error);
      }
    } else {
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
          customer: stripeCustomerId,
          success_url: `${process.env.PROXY_SERVER}api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.PROXY_APP}app`,
        });
        res.status(200).json(session.url);
      } catch (error) {
        res.send(400).json(error);
      }
    }
  }
);

//stripe success
router.get("/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  try {
    const response = await Subscription.findByIdAndUpdate(
      { _id: session.metadata.subId },
      {
        active: true,
        stripeSubId: session.subscription,
        stripeCustomerId: session.customer,
      }
    );
    const user = await User.findByIdAndUpdate(
      { _id: session.metadata.userId },
      { stripeCustomerId: session.customer }
    );

    res.status(200).redirect(process.env.PROXY_APP);
  } catch (error) {
    res.send({ error: "Error in /success route", error: error });
  }
});

//stripe cancel
router.get("/deactivate", async (req, res) => {
  const portalSession = await stripe.billingPortal.session.create({});
  res.redirect(process.env.PROXY_APP);
});

module.exports = router;
