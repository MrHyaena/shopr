const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(
  fromEmail,
  toEmail,
  subject,
  emailBody,
  reply,
  replyTo
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let replyToContact = fromEmail;
  if (reply) {
    replyToContact = replyTo;
  }

  const response = await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: subject,
    html: emailBody,
    replyTo: replyToContact,
    attachments: [
      {
        filename: "shopr-background.png",
        path: "./public/images/shopr-google.png",
        cid: "logo@nodemailer.com",
      },
    ],
  });

  return response;
}

module.exports = { sendEmail };
