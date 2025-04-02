//Router for email requests
// ---------------------------------------------------

//Requirements
require("dotenv").config();

//Email templates and function
const { emailTemplateUserMessage } = require("../email/emailTemplates");
const { sendEmail } = require("../email/sendEmail");

// --------------------------- CONTROLLER FUNCTIONS --------------------------------

//User sends message from app to our address
async function userSendMessage(req, res) {
  const data = req.body;

  //Setting up email data
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
    //Sending email with imported function
    const response = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody,
      true,
      data.email
    );
    res.status(200).json("Zpráva úspěšně odeslána");
  } catch {
    res.status(400).json("Zprávu se nepodařilo odeslat");
  }
}

module.exports = {
  userSendMessage,
};
