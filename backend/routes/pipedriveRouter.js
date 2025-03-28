//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Sublog = require("../models/sublogModel");
const Subscription = require("../models/subscriptionModel");

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//activate subscription route - creating cheackout session
router.post("/webhook/activity/update", express.json(), async (req, res) => {
  const data = req.body.data;
  const previous = req.body.previous;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw Error("Chybí autorizace");
  }

  const auth = new Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  if (
    user != process.env.PIPEDRIVE_UPDATE_WEBHOOK_USERNAME &&
    pass != process.env.PIPEDRIVE_UPDATE_WEBHOOK_PASSWORD
  ) {
    throw Error("Nejste authorizovaní");
  }

  console.log("Ověření proběhlo v pořádku");

  try {
    if (
      data.public_description == "Objednávka" &&
      data.done == true &&
      previous.done == false
    ) {
      // ---------------------- MONGOOSE - create record of subscription ----------------------

      const personId = data.person_id;
      const subscription = await Subscription.findOne({
        pipedrivePersonId: personId,
      });

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
});

module.exports = router;
