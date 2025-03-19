//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const { sendEmail } = require("../email/sendEmail");
const { emailTemplateUserMessage } = require("../email/emailTemplates");
const { requireAuth } = require("../middleware/requireAuth");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route
router.post("/usercontact", requireAuth, async (req, res) => {
  const data = req.body;

  let fromEmail = "zakaznik@shopr.cz";
  let toEmail = "info@shopr.cz";
  let subject = "Shopr - Zákaznická zpráva - " + data.subject;
  let emailBody = emailTemplateUserMessage(
    data.subject,
    data.message,
    data.email,
    data.subscription
  );

  try {
    const response = await sendEmail(fromEmail, toEmail, subject, emailBody);
    res.status(200).json("Zpráva úspěšně odeslána");
  } catch {
    res.status(400).json("Zprávu se nepodařilo odeslat");
  }
});

module.exports = router;
