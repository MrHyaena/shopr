//Router for user handling
// ---------------------------------------------------

//requirements
const express = require("express");

//controller functions
const {
  loginUser,
  signupUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

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

module.exports = router;
