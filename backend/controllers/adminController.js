//Admin controller - for admin router
//------------------------------------------

//Requirements
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

//Models
const Admin = require("../models/adminModel");
const Subscription = require("../models/subscriptionModel");

//Create token function
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

// --------------------------- CONTROLLER FUNCTIONS --------------------------------

//Admin signup controller function - NONACTIVE ROUTE
const signupAdmin = async (req, res) => {
  //Get data from request body
  const { email, password } = req.body;

  try {
    //Hashing password with salt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Creating admin account
    const user = await Admin.create({
      email: email,
      password: hash,
      role: "admin",
    });

    //Creating token for authorization
    const token = await createToken(user._id);

    res.status(200).json({ email: email, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Admin login controller function
const loginAdmin = async (req, res) => {
  //Getting data from request body
  const { email, password } = req.body;

  try {
    //Data verification
    if (!email || !password) {
      throw Error("Chybí údaj");
    }

    //Trying to find admin in database
    const user = await Admin.findOne({ email });
    if (!user) {
      throw Error("Účet s tímto emailem neexistuje.");
    }

    //Verification of password hash and password input
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Nesprávný email nebo heslo.");
    }

    //Creating token for future authorization
    const token = createToken(user._id);

    res.status(200).json({ email: email, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Get one subscription controller function
const getSubscription = async (req, res) => {
  //Getting id from request parameters
  const { id } = req.params;

  //Validation of mongoose object
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  //Finding subscription in databse
  const subscription = await Subscription.findById(id);
  if (!subscription) {
    return res.status(404).json({ error: "Takové předplatné neexistuje" });
  }

  //Sending response
  res.status(200).json(subscription);
};

module.exports = {
  signupAdmin,
  loginAdmin,
  getSubscription,
};
