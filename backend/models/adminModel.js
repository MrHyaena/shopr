//Admin model - admin users
//-------------------------------------------

//Requirements
const mongoose = require("mongoose");

//Schema init
const Schema = mongoose.Schema;

//Creating Schema
const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("Admin", adminSchema);
