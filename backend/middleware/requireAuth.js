//Authorization functions
//--------------------------------------------

//Requirements
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

//User authorization
const requireUserAuth = async (req, res, next) => {
  //Getting headers
  const { authorization } = req.headers;

  //Headers missing
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  //Getting token from authorization header
  const token = authorization.split(" ")[1];

  try {
    //Verification of token and getting user ID out of it
    const { _id } = jwt.verify(token, process.env.SECRET);

    //Finind the user with mongoose model
    req.user = await User.findOne({ _id }).select("_id");

    //If user exists, route can continue
    next();
  } catch (error) {
    console.log("tokenExpired");
    res.status(401).json({
      error: "Request is not authorized/user logged out",
      errorMessage: error.name,
    });
  }
};

//Admin authorization
const requireAdminAuth = async (req, res, next) => {
  //Getting headers
  const { authorization } = req.headers;

  //Headers missing
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  //Getting token from authorization header
  const token = authorization.split(" ")[1];

  try {
    //Verification of token and getting user ID out of it
    const { _id } = jwt.verify(token, process.env.SECRET);

    //Finind the admin with mongoose model
    req.user = await Admin.findOne({ _id }).select("_id");

    //If user exists, route can continue
    next();
  } catch (error) {
    console.log("tokenExpired");
    res.status(401).json({
      error: "Request is not authorized/user logged out",
      errorMessage: error.name,
    });
  }
};

module.exports = { requireUserAuth, requireAdminAuth };
