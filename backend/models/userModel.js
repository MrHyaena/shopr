//requirements
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//user schema for mongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    _ID: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//module export
module.exports = mongoose.model("User", userSchema);
