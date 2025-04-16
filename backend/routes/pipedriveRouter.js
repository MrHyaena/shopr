//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const express = require("express");

//Controller functions
const {
  pipedriveUpdateActivityWebhook,
} = require("../controllers/pipedriveController");
const { sendSms } = require("../functions/sendSms");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//Pipedrive update activity - webhook
router.post(
  "/webhook/activity/update",
  express.json(),
  pipedriveUpdateActivityWebhook
);

router.post("/sms", async (req, res) => {
  try {
    const response = await sendSms();

    res.status(200).json("Sms odesláno");
  } catch (error) {
    res.status(400).json({ zprava: "Někde je problém", error: error.message });
  }
});

module.exports = router;
