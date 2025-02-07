//Router for user handling
// ---------------------------------------------------

//requirements
const express = require("express");

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//login route
router.post("/login", express.json(), (req, res) => {
  res.json("login");
});

//signup route
router.post("/signup", express.json(), (req, res) => {
  res.json("signup");
});

//delete user
router.post("/delete", express.json(), (req, res) => {
  res.json("delete");
});

module.exports = router;
