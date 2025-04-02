//Sublog model - for logging subscription items in time of order
//-------------------------------------------

//Requirements
const mongoose = require("mongoose");

//User schema for mongoDB
const Schema = mongoose.Schema;

//Creating Schema
const sublogSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    mysteryItem: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("Sublog", sublogSchema);
