//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route
router.get(
  "/activate/:userId/:subId/:subFrequency",
  requireAuth,
  async (req, res) => {
    const { subId, subFrequency, user } = req.params;
    console.log({ subId, subFrequency, user });

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
        user: user,
      },
      success_url: `${process.env.PROXY}api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.PROXY}app`,
    });

    if (session) {
      res.status(200).json(session.url);
    }

    if (!session) {
      res.status(400).json("Nepovedlo se spojit s platební bránou Stripe.");
    }
  }
);

//stripe success
router.get("/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session);

  res.send("Subscribed successfully");
});

//stripe cancel
router.get("/cancel", async (req, res) => {
  res.redirect(process.env.PROXY);
});

module.exports = router;
