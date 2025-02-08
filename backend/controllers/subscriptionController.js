const Subscription = require("../models/subscriptionModel");
const mongoose = require("mongoose");

//get all workouts
const getSubscriptions = async (req, res) => {
  const user_id = req.user_id;

  const workouts = await Subscription.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get a single workout
const getSubscription = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  const workout = await Subscription.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  res.status(200).json(workout);
};

//create new subscription
const createSubscription = async (req, res) => {
  const {
    contact,
    address,
    name,
    website,
    frequency,
    day,
    deliveryMethod,
    items,
  } = req.body;

  //validation
  let emptyFields = [];

  if (!contact) {
    emptyFields.push("Kontaktní údaje");
  }
  if (!address) {
    emptyFields.push("Adresa");
  }
  if (!name) {
    emptyFields.push("Název předplatného");
  }
  if (!website) {
    emptyFields.push("Webová stránka");
  }
  if (!frequency) {
    emptyFields.push("Frekvence doručování");
  }
  if (!day) {
    emptyFields.push("Preferovaný den objednání");
  }
  if (!deliveryMethod) {
    emptyFields.push("Způsob doručení");
  }
  if (!items) {
    emptyFields.push("Položky");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Prosím, vyplňte pole", emptyFields });
  }

  //Creating subscription
  try {
    const user_id = req.user_id;
    const workout = await Workout.create({
      contact,
      address,
      name,
      website,
      frequency,
      day,
      deliveryMethod,
      items,
    });
    res.status(200).json(workout);
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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
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
