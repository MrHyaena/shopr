//Router for subscriptions handling
// ---------------------------------------------------

//requirements
const express = require("express");
const {
  createSubscription,
  getSubscriptions,
  getSubscription,
  deleteSubscription,
  updateSubscription,
} = require("../controllers/subscriptionController");

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//create subscription route
router.post("/create", createSubscription);

//update subscription route
router.patch("/update", updateSubscription);

//delete subscription route
router.delete("/:id", deleteSubscription);

//get all subscriptions route
router.get("/", getSubscriptions);

//get one subscription route
router.get("/:id", getSubscription);

module.exports = router;
