const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(fromEmail, toEmail, subject, emailBody) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const response = await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: subject,
    html: emailBody,
  });

  return response;
}

module.exports = { sendEmail };
