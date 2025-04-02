//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Controller functions
const {
  createSubscription,
  getSubscriptions,
  getSubscription,
  deleteSubscription,
  updateSubscription,
  deactivateSubscription,
} = require("../controllers/subscriptionController");
const { requireUserAuth } = require("../middleware/requireAuth");

//Creating router
const router = express.Router();

// -------------------- middleware functions -------------------
//authentication of the user - required for every interaction with subscription
router.use(requireUserAuth);

// ---------------------- SERVER ROUTES ----------------------

//Create subscription
router.post("/", createSubscription);

//Update subscription
router.patch(
  "/:id/:frequencyChange/:nameChange/:websiteChange",
  updateSubscription
);

//Delete subscription
router.delete("/:id", deleteSubscription);

//Get all subscriptions
router.get("/", getSubscriptions);

//Get one subscription
router.get("/:id", getSubscription);

//Deactivate subscription - cancel Stripe payments
router.get("/deactivate/:subId/:stripeSubId/:userId", deactivateSubscription);

module.exports = router;
