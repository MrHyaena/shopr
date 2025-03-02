//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

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

//module export
module.exports = mongoose.model("Hashcheck", hashcheckSchema);
