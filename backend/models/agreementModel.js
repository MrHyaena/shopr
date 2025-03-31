//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

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

//module export
module.exports = mongoose.model("Agreement", agreementSchema);
