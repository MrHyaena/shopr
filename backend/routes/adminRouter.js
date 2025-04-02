//Router for admin account request
//For now, only used in google extension
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Controller functions
const {
  loginAdmin,
  getSubscription,
} = require("../controllers/adminController");

//Authorization
const { requireAdminAuth } = require("../middleware/requireAuth");

//Creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//Login admin account
router.post("/login", loginAdmin);

//Get a subscription with admin account
router.get("/subscription/:id", requireAdminAuth, getSubscription);

module.exports = router;
