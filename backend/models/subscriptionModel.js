//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    stripeSubId: {
      type: String,
    },
    stripeCustomerId: {
      type: String,
    },
    pipedrivePersonId: {
      type: String,
    },
    pipedriveDealId: {
      type: String,
    },
    active: {
      type: Boolean,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    addressNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    cityNumber: {
      type: String,
      required: true,
    },
    subName: {
      type: String,
      required: true,
    },
    subWebsite: {
      type: String,
      required: true,
    },
    subFrequency: {
      type: String,
      required: true,
    },
    subDay: {
      type: String,
      required: true,
    },
    subDeliveryMethod: {
      type: String,
      required: true,
    },
    subDeliveryAddress: {
      type: String,
    },
    itemsType: {
      type: String,
    },
    items: {
      type: Array,
    },
    mysteryItem: {
      type: Object,
    },
  },
  { timestamps: true }
);

//module export
module.exports = mongoose.model("Subscription", subscriptionSchema);
