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

// -------------------- middleware function -------------------
//authentication of the user
//router.use(requireAuth);

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route
router.get("/activate/:subId", async (req, res) => {
  const user = req.query.user;
  const frequency = req.query.frequency;
  const { subId } = req.params;

  if (!subId) {
    return res.status(404).json("Plan does not exist");
  }

  if (!frequency) {
    return res.status(404).json("You need to set up subFrequency");
  }

  let priceId;

  switch (frequency.toLowerCase()) {
    case "weekly":
      priceId = process.env.PLAN_WEEKLY;
      break;
    case "biWeekly":
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
    success_url:
      process.env.PROXY + "api/stripe/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.PROXY + "app",
    metadata: { user: user, subId: subId },
  });

  if (session) {
    res.status(200).json(session.url);
  }

  if (!session) {
    res.status(400).json("Nepovedlo se spojit s platební bránou Stripe.");
  }
});

//stripe success
router.get("/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res.json("success");
});

//stripe cancel
router.get("/cancel", async (req, res) => {
  res.redirect(process.env.PROXY);
});

module.exports = router;
