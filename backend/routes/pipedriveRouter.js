//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Controller functions
const {
  pipedriveUpdateActivityWebhook,
} = require("../controllers/pipedriveController");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//Pipedrive update activity - webhook
router.post(
  "/webhook/activity/update",
  express.json(),
  pipedriveUpdateActivityWebhook
);

module.exports = router;
