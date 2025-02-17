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
    stripeCustomerId: {
      type: String,
    },
    firstName: {
      type: String,
    },
    secondName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    addressNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    cityNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

//static signup method
userSchema.statics.signup = async function (data) {
  const {
    email,
    password,
    firstName,
    secondName,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  } = data;
  //validation
  if (!email || !password || !firstName || !secondName || !phone) {
    throw Error("Musíte vyplnit všechna pole");
  }

  if (!validator.isEmail(email)) {
    throw Error("Emailová adresa není platná");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email již existuje");
  }

  //password salt and hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //creating new record of user into Users database
  const user = await this.create({
    email,
    password: hash,
    stripeCustomerId: "none",
    firstName,
    secondName,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("Musíte vyplnit všechna pole");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Nesprávný email");
  }

  //testing if password is matching
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Nesprávné heslo");
  }

  return user;
};

userSchema.statics.delete = async function (email, password) {
  if (!email || !password) {
    throw Error("Musíte vyplnit všechna pole");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Nesprávný email");
  }

  //testing if password is matching
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Nesprávné heslo");
  }

  const deletedUser = await this.findByIdAndDelete({ _id: user.id });

  return deletedUser;
};

userSchema.statics.update = async function (data) {
  const {
    email,
    firstName,
    secondName,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  } = data;

  if (
    !email ||
    !firstName ||
    !secondName ||
    !phone ||
    !address ||
    !addressNumber ||
    !city ||
    !cityNumber
  ) {
    throw Error("Musíte vyplnit všechna pole");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Nesprávný email");
  }

  const updateUser = await this.findByIdAndUpdate(
    { _id: user.id },
    { firstName, secondName, phone, address, addressNumber, city, cityNumber }
  );

  return updateUser;
};

//module export
module.exports = mongoose.model("User", userSchema);
