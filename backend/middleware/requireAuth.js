const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log("tokenExpired");
    res.status(401).json({
      error: "Request is not authorized/user logged out",
      errorMessage: error.name,
    });
  }
};

const requireAdminAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await Admin.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log("tokenExpired");
    res.status(401).json({
      error: "Request is not authorized/user logged out",
      errorMessage: error.name,
    });
  }
};

module.exports = { requireAuth, requireAdminAuth };
