//Router for user handling
// ---------------------------------------------------

//Requirements
const express = require("express");
require("dotenv").config();

//Controller functions
const {
  loginUser,
  signupUser,
  deleteUser,
  updateUser,
  resetUserPasswordEmail,
  resetUserPassword,
  activateUser,
  authorization,
} = require("../controllers/userController");

//Authorization function
const { requireUserAuth } = require("../middleware/requireAuth");

//Creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//Authorization - check jwt token
router.get("/authorization", authorization);

//Login user
router.post("/login", loginUser);

//Signup user
router.post("/signup", signupUser);

//Deleting user account
router.delete("/delete/:id", requireUserAuth, deleteUser);

//Updating user details
router.post("/update", requireUserAuth, updateUser);

//Sending password reset email
router.get("/reset/password", resetUserPasswordEmail);

//Authorized password request
router.post("/reset/authorized", resetUserPassword);

//Authorized account activation
router.get("/activate/authorized", activateUser);

module.exports = router;
