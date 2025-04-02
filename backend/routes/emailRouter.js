//Router for email requests
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Authorization
const { requireUserAuth } = require("../middleware/requireAuth");

//Controller functions
const { userSendMessage } = require("../controllers/emailController");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//send user message
router.post("/usercontact", requireUserAuth, userSendMessage);

module.exports = router;
