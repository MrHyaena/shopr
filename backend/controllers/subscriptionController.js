require("dotenv").config();
const Subscription = require("../models/subscriptionModel");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//get all subscriptions
const getSubscriptions = async (req, res) => {
  const user_id = req.user._id;
  try {
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

//get a single subscription
const getSubscription = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  const subscription = await Subscription.findById(id);

  if (!subscription) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  res.status(200).json(subscription);
};

//create new subscription
const createSubscription = async (req, res) => {
  const {
    userId,
    stripeSubId,
    stripeCustomerId,
    firstName,
    secondName,
    phone,
    email,
    address,
    addressNumber,
    city,
    cityNumber,
    subName,
    subWebsite,
    subFrequency,
    subDay,
    subDeliveryMethod,
    subDeliveryAddress,
    items,
  } = req.body;

  //validation
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
  if (!subDay) {
    emptyFields.push("Preferovaný den objednání");
  }
  if (!subDeliveryMethod) {
    emptyFields.push("Způsob doručení");
  }
  if (subDeliveryMethod == "dropbox") {
    if (!subDeliveryAddress) {
      emptyFields.push("Adresu zásilkovny");
    }
  }
  if (!items) {
    emptyFields.push("Položky");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Prosím, vyplňte pole" + emptyFields });
  }

  //Creating subscription
  try {
    const subscription = await Subscription.create({
      userId,
      stripeSubId,
      stripeCustomerId,
      active: false,
      firstName,
      secondName,
      phone,
      email,
      address,
      addressNumber,
      city,
      cityNumber,
      subName,
      subWebsite,
      subFrequency,
      subDay,
      subDeliveryMethod,
      subDeliveryAddress,
      items,
    });

    res.status(200).json(subscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete subscription
const deleteSubscription = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  const subscription = await Subscription.findOneAndDelete({ _id: id });

  if (!subscription) {
    return res.status(400).json({ error: "Takové předplatné neexistuje" });
  }

  res.status(200).json(subscription);
};

//update subscription
const updateSubscription = async (req, res) => {
  console.log("update subscription");
  const { id, frequencyChange, nameChange, websiteChange } = req.params;

  console.log(frequencyChange, req.body.active);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  //Decide if it is also necessary to call stripe subscription update
  if (
    (frequencyChange == 1 || nameChange == 1 || websiteChange == 1) &&
    req.body.active
  ) {
    console.log("frequency change active");
    let priceId;

    switch (req.body.subFrequency.toLowerCase()) {
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

    const subscriptionObject = await stripe.subscriptions.retrieve(
      req.body.stripeSubId
    );

    const response = await stripe.subscriptions.update(req.body.stripeSubId, {
      items: [
        {
          id: subscriptionObject.items.data[0].id,
          price: priceId,
          quantity: 1,
        },
      ],
      description:
        "Nazev předplatného: " +
        req.body.subName +
        " // E-shop: " +
        req.body.subWebsite,
    });
  }

  const subscription = await Subscription.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!subscription) {
    return res.status(400).json({ error: "Takové předplatné neexistuje" });
  }

  res.status(200).json(subscription);
};

module.exports = {
  getSubscriptions,
  getSubscription,
  createSubscription,
  deleteSubscription,
  updateSubscription,
};
