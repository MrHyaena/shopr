//requirements
const Admin = require("../models/adminModel");
const Subscription = require("../models/subscriptionModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

//create token function
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

//signup admin controller function
const signupAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await Admin.create({
      email: email,
      password: hash,
      role: "admin",
    });

    const token = await createToken(user._id);

    res.status(200).json({ email: email, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });

    const match = await bcrypt.compare(password, user.password);

    const token = createToken(user._id);

    res.status(200).json({ email: email, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSubscription = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje 1" });
  }

  const subscription = await Subscription.findById(id);

  if (!subscription) {
    return res.status(404).json({ error: "Takové předplatné neexistuje 2" });
  }

  res.status(200).json(subscription);
};

module.exports = {
  signupAdmin,
  loginAdmin,
  getSubscription,
};
