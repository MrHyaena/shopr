//Router for subscriptions handling
// ---------------------------------------------------

//Requirements
require("dotenv").config();
const mongoose = require("mongoose");

//Email templates and function
const {
  emailTemplateDeactivateSubscription,
} = require("../email/emailTemplates");
const { sendEmail } = require("../email/sendEmail");

//Pipedrive functions
const {
  pipedriveApiCallV1,
  pipedriveApiCallV2,
  pipedriveApiCallDeleteV2,
} = require("../functions/pipedriveApiCall");

//Mongoose Models
const Subscription = require("../models/subscriptionModel");
const User = require("../models/userModel");
const { sendSmsOrderComplete } = require("../functions/sendSms");

//Stripe init
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//Get all subscriptions controller function
const getSubscriptions = async (req, res) => {
  //Get user ID from request object
  const user_id = req.user._id;
  try {
    //Find subscriptions and sort them
    const subscriptions = await Subscription.find({ userId: user_id }).sort({
      createdAt: 1,
    });

    if (!subscriptions) {
      throw Error("Nemáte žádné předplatné");
    }

    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Get one subscription controller function
const getSubscription = async (req, res) => {
  //Get id from URL parameters
  const { id } = req.params;

  //Validating subscription ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  //Finding one subscription
  const subscription = await Subscription.findById(id);

  if (!subscription) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  res.status(200).json(subscription);
};

//Create new subscription controller function
const createSubscription = async (req, res) => {
  //Getting all data from request body
  const {
    userId,
    stripeSubId,
    stripeCustomerId,
    pipedrivePersonId,
    pipedriveDealId,
    firstName,
    secondName,
    phoneCountry,
    phone,
    email,
    address,
    addressNumber,
    city,
    cityNumber,
    subName,
    subWebsite,
    nextPaymentDate,
    subFrequency,
    subDeliveryMethod,
    subDeliveryAddress,
    subPayment,
    subCoupon,
    subAccount,
    subAccountLogin,
    subAccountPassword,
    itemsType,
    items,
    mysteryItem,
  } = req.body;

  //Data validation
  let emptyFields = [];

  if (!firstName) {
    emptyFields.push("Jméno");
  }
  if (!secondName) {
    emptyFields.push("Příjmení");
  }
  if (!phone) {
    emptyFields.push("Telefon");
  }
  if (!email) {
    emptyFields.push("Email");
  }
  if (!address) {
    emptyFields.push("Ulice");
  }
  if (!addressNumber) {
    emptyFields.push("Číslo popisné");
  }
  if (!city) {
    emptyFields.push("Město");
  }
  if (!cityNumber) {
    emptyFields.push("PSČ");
  }
  if (!subName) {
    emptyFields.push("Název předplatného");
  }
  if (!subWebsite) {
    emptyFields.push("Webová stránka");
  }
  if (!subFrequency) {
    emptyFields.push("Frekvence doručování");
  }

  if (!subDeliveryMethod) {
    emptyFields.push("Způsob doručení");
  }
  if (subDeliveryMethod == "dropbox") {
    if (!subDeliveryAddress) {
      emptyFields.push("Adresu zásilkovny");
    }
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Prosím, vyplňte pole" + emptyFields });
  }

  // ------------- PIPEDRIVE - CREATING SUBSCRIPTION ----------------
  try {
    let subPriceValue = 0;
    //Getting deal value
    switch (subFrequency.toLowerCase()) {
      case "weekly":
        subPriceValue = 400;
        break;
      case "biweekly":
        subPriceValue = 200;
        break;
      case "monthly":
        subPriceValue = 100;
        break;
      case "bimonthly":
        subPriceValue = 50;
        break;
      case "quarterly":
        subPriceValue = 33;
        break;
    }

    //If deliveryAddress and mysteryMessage are empty
    let deliveryAddress = subDeliveryAddress;
    if (subDeliveryAddress == "") {
      deliveryAddress = "empty";
    }
    let mysteryMessage = mysteryItem.message;
    if (mysteryMessage == "") {
      mysteryMessage = "empty";
    }

    //Creating pipedrive payload fro api call
    const payload = {
      title: "Předplatné - " + subName,
      value: Number(subPriceValue),
      user_id: Number(process.env.PIPEDRIVE_ADMIN_ID),
      person_id: Number(pipedrivePersonId),
      pipeline_id: 1,

      //Subscription website
      "6fe93496fbed53b575f74a3f2c417c3a2835b8ec": subWebsite.toString(),
      //Subscription frequency
      "324eb38d42174b3aa9a863a9b17f113e8a0e7e49": subFrequency.toString(),

      //Delivery method
      "312b6dcc95b0ba9ed831633b403a4403a40b31dd": subDeliveryMethod.toString(),
      //Delivery address
      "7a1dbb2f437886b1406c46e6b321fcc1e1d6e109": deliveryAddress.toString(),
      //Address
      a510a3128419f358c03cc252266397c5f5da2d1c: address.toString(),
      //Address number
      a5607a0f617db28a2c7fd063678d356477fd8957: addressNumber.toString(),
      //City
      "5b5f7eede36fbbd0806074735ec0267c9d922cae": city.toString(),
      //City number
      "1366f1e1ffa9d80d7d8f62138a30b0f76442feef": cityNumber.toString(),
      //Stripe subscription id
      e4fb7e3a556ffa5f39a87863e13d9fba332c7c65: stripeSubId.toString(),
      //Stripe customer id
      "234eb23481651e82621f30edd7ff98afaa46b125": stripeCustomerId.toString(),
      //User id
      d928b5c7e8156ed85f55cb5457effb76e8b77667: userId.toString(),
      //Mongoose id
      "5146a1cc524232c94914cbb5068e4b724407b9ed": "empty",
      //firstName
      "16185306e53f189ae97c6ffa6e4650f77dac9419": firstName.toString(),
      //secondName
      "5373cbb402366fa93e8b650db79a1fc84a7f53e8": secondName.toString(),
      //Email
      "598febcf061c8207b5a96191701df4fe30b75456": email.toString(),
      //Phone
      "4bf6ca46c825f1b8e771f55d14fb46245ee171f1": phone.toString(),
      //ItemsType
      c2ec04237b8817bfcc272cb085cb2f321cfeab4f: itemsType.toString(),
      //Mystery message
      "932e8f086a595364fe31c2b63d9e7952c5c2c201": mysteryMessage.toString(),
      //Mystery amount
      "0c0ede36a57daf67eaeb95a275b8c220cada4510": mysteryItem.amount.toString(),
      //Mystery categories
      "16f2e1cee90c1bc62ea81d80528fdc0d6070839f":
        mysteryItem.categories.join(" / "),
    };

    //Pipedrive api call
    const pipeResponse = await pipedriveApiCallV1("deals", "POST", payload);

    const pipeDeal = await pipeResponse.json();

    if (!pipeResponse.ok) {
      throw Error(
        "Omlouváme se, předplatné nelze vytvořit. Chyba je na naší straně. (Pipedrive)"
      );
    }

    // ------------- MONGOOSE - creating new record of subscription ----------------
    const subscription = await Subscription.create({
      userId,
      stripeSubId,
      stripeCustomerId,
      pipedrivePersonId,
      pipedriveDealId: pipeDeal.data.id,
      active: false,
      firstName,
      secondName,
      phoneCountry,
      phone,
      email,
      address,
      addressNumber,
      city,
      cityNumber,
      subName,
      subWebsite,
      nextPaymentDate,
      subFrequency,
      subDeliveryMethod,
      subDeliveryAddress,
      subPayment,
      subCoupon,
      subAccount,
      subAccountLogin,
      subAccountPassword,
      itemsType,
      items,
      mysteryItem,
    });

    res.status(200).json(subscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete subscription controller function
const deleteSubscription = async (req, res) => {
  //Getting id from URL params
  const { id } = req.params;
  try {
    // ------------- MONGOOSE - deleting record ----------------
    //Id validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Takové předplatné neexistuje" });
    }

    //Deleting subscription from database
    const subscription = await Subscription.findOneAndDelete({ _id: id });
    if (!subscription) {
      throw Error("Takové předplatné neexistuje");
    }

    // ------------- PIPEDRIVE - deleting deal ----------------
    const pipeResponse = await pipedriveApiCallDeleteV2(
      "deals/" + subscription.pipedriveDealId,
      "DELETE"
    );
    if (!pipeResponse.ok) {
      throw Error(
        "Chyba je na naší straně, omlouváme se. Zkuste to prosím později. (Pipedrive)"
      );
    }

    res.status(200).json(subscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update subscription controller function
const updateSubscription = async (req, res) => {
  //Getting data from request body
  const {
    userId,
    stripeSubId,
    stripeCustomerId,
    pipedrivePersonId,
    pipedriveDealId,
    active,
    firstName,
    secondName,
    phoneCountry,
    phone,
    email,
    address,
    addressNumber,
    city,
    cityNumber,
    subName,
    subWebsite,
    subFrequency,
    subDeliveryMethod,
    subDeliveryAddress,
    subPayment,
    subCoupon,
    subAccount,
    subAccountLogin,
    subAccountPassword,
    itemsType,
    items,
    mysteryItem,
  } = req.body;

  //Getting data from URL params
  const { id, frequencyChange, nameChange, websiteChange } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  // ------------- MONGOOSE - updating mongoose record ----------------
  const subscription = await Subscription.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  // ------------- PIPEDRIVE - updating deal ----------------
  let subPriceValue = 0;
  //Getting right deal value
  switch (subFrequency.toLowerCase()) {
    case "weekly":
      subPriceValue = 400;
      break;
    case "biweekly":
      subPriceValue = 200;
      break;
    case "monthly":
      subPriceValue = 100;
      break;
    case "bimonthly":
      subPriceValue = 50;
      break;
    case "quarterly":
      subPriceValue = 33;
      break;
  }

  //If deliveryAddress and mysteryMessage are empty
  let deliveryAddress = subDeliveryAddress;
  if (subDeliveryAddress == "") {
    deliveryAddress = "empty";
  }
  let mysteryMessage = mysteryItem.message;
  if (mysteryMessage == "") {
    mysteryMessage = "empty";
  }

  //Pipedrive api call payload
  const payload = {
    title: ("Předplatné - " + subName).toString(),
    value: Number(subPriceValue),
    person_id: Number(pipedrivePersonId),
    //Subscription website
    custom_fields: {
      "6fe93496fbed53b575f74a3f2c417c3a2835b8ec": subWebsite.toString(),
      //Subscription frequency
      "324eb38d42174b3aa9a863a9b17f113e8a0e7e49": subFrequency.toString(),

      //Delivery method
      "312b6dcc95b0ba9ed831633b403a4403a40b31dd": subDeliveryMethod.toString(),
      //Delivery address
      "7a1dbb2f437886b1406c46e6b321fcc1e1d6e109": deliveryAddress.toString(),
      //Address
      a510a3128419f358c03cc252266397c5f5da2d1c: address.toString(),
      //Address number
      a5607a0f617db28a2c7fd063678d356477fd8957: addressNumber.toString(),
      //City
      "5b5f7eede36fbbd0806074735ec0267c9d922cae": city.toString(),
      //City number
      "1366f1e1ffa9d80d7d8f62138a30b0f76442feef": cityNumber.toString(),
      //Stripe subscription id
      e4fb7e3a556ffa5f39a87863e13d9fba332c7c65: stripeSubId.toString(),
      //Stripe customer id
      "234eb23481651e82621f30edd7ff98afaa46b125": stripeCustomerId.toString(),
      //User id
      d928b5c7e8156ed85f55cb5457effb76e8b77667: userId.toString(),
      //Mongoose id
      "5146a1cc524232c94914cbb5068e4b724407b9ed": id.toString(),
      //firstName
      "16185306e53f189ae97c6ffa6e4650f77dac9419": firstName.toString(),
      //secondName
      "5373cbb402366fa93e8b650db79a1fc84a7f53e8": secondName.toString(),
      //Email
      "598febcf061c8207b5a96191701df4fe30b75456": email.toString(),
      //Phone
      "4bf6ca46c825f1b8e771f55d14fb46245ee171f1": phone.toString(),
      //ItemsType
      c2ec04237b8817bfcc272cb085cb2f321cfeab4f: itemsType.toString(),
      //Mystery message
      "932e8f086a595364fe31c2b63d9e7952c5c2c201": mysteryMessage.toString(),
      //Mystery amount
      "0c0ede36a57daf67eaeb95a275b8c220cada4510": mysteryItem.amount.toString(),
      //Mystery categories
      "16f2e1cee90c1bc62ea81d80528fdc0d6070839f":
        mysteryItem.categories.join(" / "),
    },
  };

  //Pipedrive api call
  const pipeResponse = await pipedriveApiCallV2(
    "deals/" + pipedriveDealId,
    "PATCH",
    payload
  );

  const pipeDeal = await pipeResponse.json();
  if (!pipeResponse.ok) {
    throw Error(
      "Omlouváme se, předplatné nelze vytvořit. Chyba je na naší straně. (Pipedrive)"
    );
  }

  // ------------- PIPEDRIVE - updating task ----------------

  if (subscription.itemsType == "standard") {
    //Getting all activities and filtering the ones for updating
    const pipeActivities = await pipedriveApiCallV2("activities", "GET");
    const activitiesJson = await pipeActivities.json();
    const activitiesForUpdate = await activitiesJson.data.filter(
      (item) =>
        item.done == false &&
        item.deal_id == subscription.pipedriveDealId &&
        item.is_deleted == false &&
        item.public_description == "Objednávka"
    );

    if (activitiesForUpdate.length > 0) {
      let note;
      //Note for standard items type
      const linkArray = await subscription.items.map((item, index) => {
        return `<p><a href='https://${item.url}' target='_blank'>Položka: ${
          index + 1
        } - Množství: ${item.amount}</a></p>`;
      });
      note = await linkArray.join(" ");

      //Pipedrive api call payload
      const payload = {
        note: note,
      };

      //Bulk activities update
      const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV2(
        "activities/" + activitiesForUpdate[0].id,
        "PATCH",
        payload
      );
    }
  }

  // ------------- STRIPE - update ----------------
  //Decide if it is also necessary to call stripe subscription update to save resources
  if (
    (frequencyChange == 1 || nameChange == 1 || websiteChange == 1) &&
    active
  ) {
    let priceId;

    switch (subFrequency.toLowerCase()) {
      case "weekly":
        priceId = process.env.PLAN_WEEKLY;
        break;
      case "biweekly":
        priceId = process.env.PLAN_BIWEEKLY;
        break;
      case "monthly":
        priceId = process.env.PLAN_MONTHLY;
        break;
      case "bimonthly":
        priceId = process.env.PLAN_BIMONTHLY;
        break;
      case "quarterly":
        priceId = process.env.PLAN_QUARTERLY;
        break;
    }

    //Get stripe subscriptions data
    const subscriptionObject = await stripe.subscriptions.retrieve(stripeSubId);

    let description =
      "Typ předplatného: Standard // Nazev předplatného: " +
      req.body.subName +
      " // E-shop: " +
      req.body.subWebsite;
    if (itemsType == "mystery") {
      description =
        "Typ předplatného: Mystery // Nazev předplatného: " +
        req.body.subName +
        " // E-shop: " +
        req.body.subWebsite;
    }

    //Update subscription in stripe
    const response = await stripe.subscriptions.update(stripeSubId, {
      items: [
        {
          id: subscriptionObject.items.data[0].id,
          price: priceId,
          quantity: 1,
        },
      ],
      description: description,
    });
  }

  res.status(200).json(subscription);
};

//Deactivate subscription  controller function
const deactivateSubscription = async (req, res) => {
  //Get data from request URL parameters
  const { subId, stripeSubId, userId } = req.params;

  try {
    // ---------------------- STRIPE - canceling cubscription ----------------------
    const stripeSubscription = await stripe.subscriptions.cancel(stripeSubId);

    // ---------------------- MONGOOSE - updating active to false ----------------------
    const subscription = await Subscription.findOneAndUpdate(
      { _id: subId },
      { active: false, nextPaymentDate: "empty" }
    );

    // ---------------------- PIPEDRIVE - updating stage ----------------------
    //Payload for pipedrive api call
    const payload = {
      stage_id: 2,
    };
    //Pipedrive api call
    const pipeResponse = await pipedriveApiCallV2(
      "deals/" + subscription.pipedriveDealId,
      "PATCH",
      payload
    );

    // ---------------------- PIPEDRIVE - deleting tasks ----------------------

    //Get all tasks
    const pipeActivities = await pipedriveApiCallV2("activities", "GET");
    const activitiesJson = await pipeActivities.json();

    //Filter activities for deletion
    const activitiesForDeletion = await activitiesJson.data.filter(
      (item) =>
        item.done == false &&
        item.deal_id == subscription.pipedriveDealId &&
        item.is_deleted == false
    );

    //Return activites IDs
    const activitiesIds = activitiesForDeletion.map((item) => {
      return item.id;
    });

    //Joining activites IDs
    const idsJoin = activitiesIds.join(",");

    //Pipedrive api call for bulk deletion
    const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV1(
      "activities?ids=" + idsJoin,
      "DELETE"
    );

    //Getting all user subscription from database
    const subscriptions = await Subscription.find();

    //Filtering them
    const filteredArray = subscriptions.filter((item) => item.userId == userId);

    //Updating subscriptions array with new data
    const subscriptionArray = Object.values(filteredArray);

    // ---------------------- EMAIL - sending deactivation email ----------------------
    const user = await User.findById({ _id: subscription.userId });

    //Email payload
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = user.email;
    const subject = "Předplatné deaktivováno";
    const emailBody = emailTemplateDeactivateSubscription(
      subscription.subName,
      subscription.subWebsite,
      process.env.PROXY_APP
    );
    //Email send function
    sendEmail(fromEmail, toEmail, subject, emailBody);

    res.status(200).json({ subscriptions: subscriptionArray });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getSubscriptions,
  getSubscription,
  createSubscription,
  deleteSubscription,
  updateSubscription,
  deactivateSubscription,
};
