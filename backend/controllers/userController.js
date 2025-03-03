//requirements
const User = require("../models/userModel");
const Hashcheck = require("../models/hashcheckModel");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../email/sendEmail");
require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const { pipedriveApiCallV1 } = require("../functions/pipedriveApiCall");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//create token function
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

//signup user controller function
const signupUser = async (req, res) => {
  const data = req.body;
  const {
    email,
    password,
    passwordCheck,
    firstName,
    secondName,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  } = data;
  try {
    // ------------ VALIDATION OF DATA FROM FORM --------------
    if (!email || !password || !firstName || !secondName || !phone) {
      throw Error("Musíte vyplnit všechna pole");
    }

    if (!validator.isEmail(email)) {
      throw Error("Emailová adresa není platná");
    }

    const exists = await User.findOne({ email });

    if (exists) {
      throw Error("Email již existuje");
    }

    // ------------- STRIPE - creating customer ----------------
    const customer = await stripe.customers.create({
      name: firstName + " " + secondName,
      email: email,
      phone: phone,
    });

    if (!customer) {
      throw Error(
        "Omlouváme se, účet nelze vytvořit. Chyba je na naší straně. (Stripe)"
      );
    }

    // ------------- PIPEDRIVE - creating new person ----------------

    const payload = {
      name: firstName + " " + secondName,
      owner_id: process.env.PIPEDRIVE_ADMIN_ID,
      email: [{ value: email, label: "osobni" }],
      phone: [{ value: phone, label: "osobni" }],
    };

    const pipePersonsResponse = await pipedriveApiCallV1(
      "persons",
      "POST",
      payload
    );

    const pipePerson = await pipePersonsResponse.json();

    if (!pipePersonsResponse.ok) {
      throw Error(
        "Omlouváme se, účet nelze vytvořit. Chyba je na naší straně. (Pipedrive)"
      );
    }

    // ------------------- MONGOOSE - creating user record ----------------------------
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      active: false,
      email,
      password: hash,
      pipedrivePersonId: pipePerson.data.id,
      stripeCustomerId: customer.id,
      firstName,
      secondName,
      phone,
      address,
      addressNumber,
      city,
      cityNumber,
    });

    // ------------------- EMAIL VERIFICATION - creating database hash record and sending email with URL request for checking ----------------------------
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

    const emailResponse = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody
    );

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      active: false,
      token,
      id: user._id,
      pipedrivePersonId: pipePerson.data.id,
      stripeCustomerId: user.stripeCustomerId,
      email,
      phone,
      firstName,
      secondName,
      address,
      addressNumber,
      city,
      cityNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login user controller function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ------------ VALIDATION OF DATA FROM FORM --------------
    if (!email || !password) {
      throw Error("Musíte vyplnit všechna pole");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Nesprávný email nebo heslo.");
    }

    // ------------ VERIFICATION - PASSWORD MATCHING --------------
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Nesprávný email nebo heslo.");
    }

    if (!user.active) {
      throw Error(
        "Účet zatím nebyl aktivován. Na Váš email jsme odeslali zprávu s aktivačním odkazem. Kliknutím na odkaz v emailu účet aktivujete."
      );
    }

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      token,
      active: user.active,
      id: user._id,
      pipedrivePersonId: user.pipedrivePersonId,
      stripeCustomerId: user.stripeCustomerId,
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      secondName: user.secondName,
      address: user.address,
      addressNumber: user.addressNumber,
      city: user.city,
      cityNumber: user.cityNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user controller function
const deleteUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ------------ VALIDATION OF DATA FROM FORM --------------
    if (!email || !password) {
      throw Error("Musíte vyplnit všechna pole");
    }

    // ------------ CHECKING DATABASE FOR USER --------------
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Nesprávný email");
    }

    // ------------ CHECKING IF PASSWORDS ARE MATCHING --------------
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Nesprávné heslo");
    }

    // ------------ DELETING USER FROM DATABASE --------------
    const deletedUser = await User.findByIdAndDelete({ _id: user.id });

    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const data = req.body;
  const {
    firstName,
    secondName,
    email,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  } = data;

  try {
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

    // ------------ VALIDATION OF DATA --------------
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

    // ------------ CHECKING IF USER EXISTS --------------
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Nesprávný email");
    }

    // ------------ UPDATING USER --------------
    const updateUser = await User.findByIdAndUpdate(
      { _id: user.id },
      { firstName, secondName, phone, address, addressNumber, city, cityNumber }
    );

    res.status(200).json({ ...data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetUserEmail = async (req, res) => {
  const email = req.query.email;

  //Find a user based on email address
  const user = await User.findOne({ email });

  //If user exists, proceed to creating and sending email
  if (user) {
    //Hashing a unique token together
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(process.env.PASSWORD_CHANGE_SECRET, salt);

    //Creating record in Hashcheck database
    const Hashcheck = await Hashcheck.create({ userId: user._id, token: hash });

    //Setting up and sending email
    const url = process.env.PROXY_APP + "/reset/password?hash=" + hash;
    const emailBody = `<h3>Dobr&yacute; den,</h3> <p>tento email slouž&iacute; pro změnu hesla v aplikaci Shopr. Pro změnu hesla klepněte na odkaz n&iacute;že:</p> <p><a href="${url}">${url}</p> <p>Pokud jste si tuto změnu nevyž&aacute;dali, napi&scaron;te n&aacute;m pros&iacute;m na adresu <a href="mailto:info@shopr.cz">info@shopr.cz</a>.</p> <p>Přejeme V&aacute;m kr&aacute;sn&yacute; zbytek dne.</p> <p>----------------------------------</p> <p>S pozdravem,</p> <p>Martin Doležal</p> <p>Shopr</p>`;
    const fromEmail = process.env.SMTP_EMAIL_ADMIN;
    const toEmail = email;
    const subject = "Shopr: Změna hesla k uživatelskému účtu";
    const response = await sendEmail(fromEmail, toEmail, subject, emailBody);
  }

  res.json(
    "Email s instrukcemi jsme Vám odeslali na vloženou emailovou adresu. Na změnu hesla máte 15 minut. Jakmile heslo změníte, můžete se znovu přihlásit."
  );
};

const resetUserPassword = async (req, res) => {
  const hash = req.query.hash;
  const password = req.body.password;
  const hashObject = await Hashcheck.findOne({ token: hash });
  console.log(hashObject.userId);
  //Dates
  const hashObjectDate = await hashObject.createdAt.getTime();
  const nowDate = await Date.now();
  const tenMinutes = 15 * 60 * 1000;

  try {
    if (nowDate - hashObjectDate > tenMinutes) {
      throw Error(
        "Změna hesla již není možná. Časový limit 15 minut byl přesažen. Zopakujte prosím požadavek na změnu hesla."
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.findByIdAndUpdate(
      { _id: hashObject.userId },
      {
        password: hash,
      }
    );
    console.log(user);

    if (!user) {
      throw Error(
        "Omlouváme se, problém je na naší straně. Vraťte se prosím později."
      );
    }

    res.status(200).json("Změna proběhla úspěšně, můžete se znovu přihlásit.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const activateUser = async (req, res) => {
  const hash = req.query.hash;
  const hashObject = await Hashcheck.findOne({ token: hash });

  //checking dates

  try {
    const user = await User.findByIdAndUpdate(
      { _id: hashObject.userId },
      {
        active: true,
      }
    );

    if (!user) {
      res.redirect(process.env.PROXY_APP + "/login/?problem=our");
    } else if (user) {
      res.redirect(process.env.PROXY_APP + "/login");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  signupUser,
  loginUser,
  deleteUser,
  updateUser,
  resetUserEmail,
  resetUserPassword,
  activateUser,
};
