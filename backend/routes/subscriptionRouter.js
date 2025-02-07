//Router for subscriptions handling
// ---------------------------------------------------

//requirements
const express = require("express");

//controller functions

//creating router
const router = express.Router();

// ---------------------- SERVER ROUTES ----------------------

//login route
router.post("/create", express.json(), (req, res) => {
  res.json("create");
});

//signup route
router.post("/edit", express.json(), (req, res) => {
  res.json("edit");
});

//delete user
router.post("/delete", express.json(), (req, res) => {
  res.json("delete");
});

module.exports = router;
