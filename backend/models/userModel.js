//requirements
require("dotenv").config();
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    active: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pipedrivePersonId: {
      type: String,
    },
    stripeCustomerId: {
      type: String,
    },
    firstName: {
      type: String,
    },
    secondName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    addressNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    cityNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

//module export
module.exports = mongoose.model("User", userSchema);
