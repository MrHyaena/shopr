//Subscription model
//-------------------------------------------

//Requirements
const mongoose = require("mongoose");

//Schema init
const Schema = mongoose.Schema;

//Creating Schema
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
    nextPaymentDate: {
      type: String,
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
    termsAgreement: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("Subscription", subscriptionSchema);
