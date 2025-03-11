//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

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

//module export
module.exports = mongoose.model("Admin", adminSchema);
