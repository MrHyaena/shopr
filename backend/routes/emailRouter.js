//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const { sendEmail } = require("../email/sendEmail");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route
router.post("/usercontact", requireAuth, async (req, res) => {
  const data = req.body;

  let fromEmail = "zakaznik@shopr.cz";
  let toEmail = "info@shopr.cz";
  let subject = data.subject;
  let emailBody = `<h2>uživatelská zpráva</h2><p>${data.message}</p><p>${data.email}</p>`;

  try {
    const response = await sendEmail(fromEmail, toEmail, subject, emailBody);
    res.status(200).json("Zpráva úspěšně odeslána");
  } catch {
    res.status(400).json("Zprávu se nepodařilo odeslat");
  }
});

module.exports = router;
