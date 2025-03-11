//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const {
  loginAdmin,
  getSubscription,
} = require("../controllers/adminController");
const { requireAdminAuth } = require("../middleware/requireAuth");

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//create subscription route
router.post("/login", loginAdmin);

//get any subscription
router.get("/subscription/:id", requireAdminAuth, getSubscription);

module.exports = router;
