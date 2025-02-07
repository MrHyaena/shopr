//requirements
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//user schema for mongoDB
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    deliveryMethod: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

//module export
module.exports = mongoose.model("Subscription", subscriptionSchema);
