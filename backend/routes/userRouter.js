//Router for user handling
// ---------------------------------------------------

//requirements
const express = require("express");

//controller functions
const {
  loginUser,
  signupUser,
  deleteUser,
} = require("../controllers/userController");

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

//delete user
router.post("/delete", deleteUser);

module.exports = router;
