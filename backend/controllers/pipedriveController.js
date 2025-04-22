//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();

const {
  emailTemplateSubscriptionProcessed,
} = require("../email/emailTemplates");
const { sendEmail } = require("../email/sendEmail");
const { sendSmsOrderComplete } = require("../functions/sendSms");
//Models
const Sublog = require("../models/sublogModel");
const Subscription = require("../models/subscriptionModel");

// --------------------------- CONTROLLER FUNCTIONS --------------------------------

//Update activity webhook in Pipedrive
async function pipedriveUpdateActivityWebhook(req, res) {
  const data = req.body.data;
  const previous = req.body.previous;
  const authHeader = req.headers.authorization;

  //Request authorization
  if (!authHeader) {
    throw Error("Chybí autorizace");
  }

  //Getting authorization data from request authorization header
  const auth = new Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  //If data doesnt match, throw Error
  if (
    user != process.env.PIPEDRIVE_UPDATE_WEBHOOK_USERNAME &&
    pass != process.env.PIPEDRIVE_UPDATE_WEBHOOK_PASSWORD
  ) {
    throw Error("Nejste authorizovaní");
  }

  console.log("Ověření proběhlo v pořádku");

  try {
    //If statement for decision about update
    if (
      data.public_description == "Objednávka" &&
      data.done == true &&
      previous.done == false
    ) {
      //Getting the data from Subscription model
      const personId = data.person_id;
      const subscription = await Subscription.findOne({
        pipedrivePersonId: personId,
      });

      const fromEmail = process.env.SMTP_EMAIL_INFO;
      const toEmail = subscription.email;
      const subject = "Pravidelná objednávka vyřízena";
      const emailBody = emailTemplateSubscriptionProcessed(
        subscription.subName
      );

      sendEmail(fromEmail, toEmail, subject, emailBody);

      if (
        subscription.subPayment == "card" ||
        subscription.subPayment == "bank"
      ) {
        const smsPhone =
          subscription.phoneCountry.toString() + subscription.phone.toString();

        const smsResponse = await sendSmsOrderComplete(smsPhone);
      }

      //Logging the activity completion for future arguments
      const log = Sublog.create({
        userID: subscription.userId,
        items: subscription.items,
        mysteryItem: subscription.mysteryItem,
      });
    }

    res.status(200).json("Vše proběhlo v pořádku");
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  pipedriveUpdateActivityWebhook,
};
