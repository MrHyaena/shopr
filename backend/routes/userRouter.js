//Router for user handling
// ---------------------------------------------------

//requirements
const express = require("express");
require("dotenv").config();

//controller functions
const {
  loginUser,
  signupUser,
  deleteUser,
  updateUser,
  resetUserEmail,
  resetUserPassword,
  activateUser,
} = require("../controllers/userController");
const { requireAuth } = require("../middleware/requireAuth");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

//delete user
router.post("/delete", deleteUser);

//update user
router.post("/update", requireAuth, updateUser);

//reset password email
router.get("/reset/password", resetUserEmail);

//reset password authorized request
router.post("/reset/authorized", resetUserPassword);

//activate account authorized request
router.get("/activate/authorized", activateUser);

module.exports = router;
