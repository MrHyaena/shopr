//requirements
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//user schema for mongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//static signup method
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error({
      error: "Musíte vyplnit všechna pole",
    });
  }

  if (!validator.isEmail(email)) {
    throw Error({
      error: "Emailová adresa není platná",
    });
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email již existuje");
  }

  //password salt and hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //creating new record of user into Users database
  const user = await this.create({ email, password: hash });
};

//module export
module.exports = mongoose.model("User", userSchema);
