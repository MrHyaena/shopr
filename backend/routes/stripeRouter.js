//Router for stripe handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Authorization function
const { requireUserAuth } = require("../middleware/requireAuth");

//Controller functions
const {
  stripeCreateCheckoutSession,
  stripeCheckoutSuccessRoute,
  stripeWebhookListener,
} = require("../controllers/stripeController");

//Creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//Activate subscription - creating cheackout session
router.get(
  "/activate/:userId/:subId/:subName/:subWebsite/:subFrequency/:stripeCustomerId/:itemsType",
  requireUserAuth,
  express.json(),
  stripeCreateCheckoutSession
);

//Stripe success route - activates after successful payment
router.get("/success", express.json(), stripeCheckoutSuccessRoute);

//Stripe general webhook listener
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhookListener
);

module.exports = router;
