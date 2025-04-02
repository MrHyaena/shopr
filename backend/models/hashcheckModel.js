//Hascheck model - for user password reset
//-------------------------------------------

//Requirements
const mongoose = require("mongoose");

//Schema init
const Schema = mongoose.Schema;

//Creating Schema
const hashcheckSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Module export
module.exports = mongoose.model("Hashcheck", hashcheckSchema);
