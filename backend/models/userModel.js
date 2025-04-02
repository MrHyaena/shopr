//User model
//-------------------------------------------

//requirements
const mongoose = require("mongoose");

//Schema init
const Schema = mongoose.Schema;

//Creating Schema
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
    terms: {
      type: Boolean,
    },
    marketing: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("User", userSchema);
