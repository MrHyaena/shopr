//requirements
const mongoose = require("mongoose");

//user schema for mongoDB
const Schema = mongoose.Schema;

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

//module export
module.exports = mongoose.model("Sublog", sublogSchema);
