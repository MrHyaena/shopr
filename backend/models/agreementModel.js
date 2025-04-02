//Terms agreement model - for loggin user terms and GDPR agreements
//-------------------------------------------

//Requirements
const mongoose = require("mongoose");

//Schema init
const Schema = mongoose.Schema;

//Creating Schema
const agreementSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    marketing: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("Agreement", agreementSchema);
