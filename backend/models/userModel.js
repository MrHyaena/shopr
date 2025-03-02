//requirements
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { sendEmail } = require("../email/sendEmail");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Hashcheck = require("../models/hashcheckModel");

//user schema for mongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    active: {
      type: Boolean,
      required: true,
    },
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

  //creating stripe customer
  const customer = await stripe.customers.create({
    name: firstName + " " + secondName,
    email: email,
    phone: phone,
  });

  if (!customer) {
    throw Error(
      "Učet nešel vytvořit z důvodu údržby. Omlouváme se, přijďte prosím později."
    );
  }

  //creating new record of user into Users database
  const user = await this.create({
    active: false,
    email,
    password: hash,
    stripeCustomerId: customer.id,
    firstName,
    secondName,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  });

  //email verifiaction
  const emailSalt = await bcrypt.genSalt(10);
  const emailHash = await bcrypt.hash(
    process.env.EMAIL_ACTIVATION_SECRET,
    emailSalt
  );

  const hashcheckRespone = Hashcheck.create({
    userId: user._id,
    token: emailHash,
  });

  const URL =
    process.env.PROXY_SERVER +
    "/api/user/activate/authorized/?hash=" +
    emailHash;

  const toEmail = email;
  const fromEmail = process.env.SMTP_EMAIL_ADMIN;
  const subject = "Shopr - Aktivace účtu";
  const emailBody = `<h2>Dobr&yacute; den!</h2>
  <p>V&iacute;t&aacute;me V&aacute;s v na&scaron;&iacute; aplikaci. Abyste měli do aplikace př&iacute;stup, je potřeba nejprve &uacute;čet aktivovat. To uděl&aacute;te jednodu&scaron;e kliknut&iacute;m na odkaz n&iacute;že, kter&yacute; V&aacute;s přenese na přihla&scaron;ovac&iacute; obrazovku.</p>
  <p>${URL}</p>
  <p>V&aacute;&scaron; &uacute;čet bude t&iacute;mto aktivovan&yacute; a můžete se ihned přihl&aacute;sit.</p>
  <p>S pozdravem,</p>
  <p>T&yacute;m Shopr</p>`;

  const emailResponse = await sendEmail(fromEmail, toEmail, subject, emailBody);

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
    throw Error("Nesprávný email nebo heslo.");
  }

  //testing if password is matching
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Nesprávný email nebo heslo.");
  }
  console.log(user.active);

  if (!user.active) {
    throw Error(
      "Účet zatím nebyl aktivován. Na Váš email jsme odeslali zprávu s aktivačním odkazem. Kliknutím na odkaz v emailu účet aktivujete."
    );
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
