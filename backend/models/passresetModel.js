//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

const passresetSchema = new Schema(
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

//module export
module.exports = mongoose.model("Passreset", passresetSchema);
