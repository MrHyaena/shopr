//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");

//controller functions
const {
  createSubscription,
  getSubscriptions,
  getSubscription,
  deleteSubscription,
  updateSubscription,
  deactivateSubscription,
} = require("../controllers/subscriptionController");
const { requireAuth } = require("../middleware/requireAuth");

//creating router
const router = express.Router();

// -------------------- middleware function -------------------
//authentication of the user
router.use(requireAuth);

// ---------------------- SERVER ROUTES ----------------------

//create subscription route
router.post("/", createSubscription);

//update subscription route
router.patch(
  "/:id/:frequencyChange/:nameChange/:websiteChange",
  updateSubscription
);

//delete subscription route
router.delete("/:id", deleteSubscription);

//get all subscriptions route
router.get("/", getSubscriptions);

//get one subscription route
router.get("/:id", getSubscription);

//deactivate subscription route
router.get("/deactivate/:subId/:stripeSubId", deactivateSubscription);

module.exports = router;
