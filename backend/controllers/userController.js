//requirements
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//create token function
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

//signup user controller function
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //create token
    const token = createToken(user._id);

    res.status(200).json({ msg: "signup", email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login user controller function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ msg: "login", email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user controller function
const deleteUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.delete(email, password);

    //delete user
    const token = createToken(user._id);

    res.status(200).json({ msg: "deleted", email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, deleteUser };
