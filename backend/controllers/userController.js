//requirements
const User = require("../models/userModel");
const Subscription = require("../models/subscriptionModel");
const Hashcheck = require("../models/hashcheckModel");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../email/sendEmail");
require("dotenv").config();
const bcrypt = require("bcrypt");
const validator = require("validator");
const {
  pipedriveApiCallV1,
  pipedriveApiCallDeleteV2,
  pipedriveApiCallV2,
} = require("../functions/pipedriveApiCall");
const {
  emailTemplateActivateAccount,
  emailTemplatePasswordChange,
} = require("../email/emailTemplates");
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
    terms,
  } = data;
  try {
    // ------------ VALIDATION OF DATA FROM FORM --------------
    if (
      !email ||
      !password ||
      !firstName ||
      !secondName ||
      !phone ||
      !address ||
      !addressNumber ||
      !city ||
      !cityNumber ||
      !terms
    ) {
      throw Error("Musíte vyplnit všechna pole");
    }

    //password validation
    if (password.length < 6) {
      throw Error("Heslo musí mít alespoň 6 znaků");
    }

    const letterArray = password.split("");
    const checkArray = await letterArray.filter(
      (item) => isFinite(item) && !isNaN(item)
    );
    console.log(letterArray);

    if (checkArray.length == 0) {
      throw Error("Heslo musí mít alespoň jedno číslo");
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
      terms,
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
      process.env.PROXY_APP +
      "/api/user/activate/authorized/?hash=" +
      emailHash;

    const toEmail = email;
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const subject = "Shopr - Aktivace účtu";
    const emailBody = emailTemplateActivateAccount(URL);

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
  const { id } = req.params;

  try {
    // ------------ MONGOOSE - CHECKING DATABASE FOR USER AND DELETING HIM --------------
    const user = await User.findByIdAndDelete({ _id: id });

    if (!user) {
      throw Error("Účet neexistuje");
    }

    // ------------ MONGOOSE - FINDING ALL SUBSCRIPTIONS AND GETTING THEIR DATA--------------
    const pipeDealIdsArray = [];
    const stripeSubIdsArray = [];
    const mongoSubArray = [];
    const subscriptions = await Subscription.find({ userId: id }).cursor();
    for (
      let doc = await subscriptions.next();
      doc != null;
      doc = await subscriptions.next()
    ) {
      pipeDealIdsArray.push(doc.pipedriveDealId);
      stripeSubIdsArray.push(doc.stripeSubId);
      mongoSubArray.push(doc._id);
    }

    // ------------ MONGOOSE - DELETING ALL SUBSCRIPTIONS --------------
    for (let i = 0; i < mongoSubArray.length; i++) {
      const subscriptions = await Subscription.findByIdAndDelete({
        _id: mongoSubArray[i],
      });
    }

    // ------------ PIPEDRIVE - FINDING AND DELETING ALL ACTIVITIES --------------
    //getting all the tasks
    const pipeActivities = await pipedriveApiCallV2("activities", "GET");

    const activitiesJson = await pipeActivities.json();
    //filtering the tasks with conditions
    const activitiesForDeletion = await activitiesJson.data.filter(
      (item) =>
        item.done == false &&
        item.person_id == user.pipedrivePersonId &&
        item.is_deleted == false
    );
    //creating array from task ids
    const activitiesIds = activitiesForDeletion.map((item) => {
      return item.id;
    });

    //getting the ids in the joined strings
    const taskIds = activitiesIds.join(",");
    const dealIds = pipeDealIdsArray.join(",");

    //function call for actual deletion
    const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV1(
      "activities?ids=" + taskIds,
      "DELETE"
    );

    const pipeDeleteDealsBulkcall = await pipedriveApiCallV1(
      "deals?ids=" + dealIds,
      "DELETE"
    );

    // ------------ STRIPE - CANCELING ALL SUBSCRIPTIONS --------------
    for (let i = 0; i < stripeSubIdsArray.length; i++) {
      const stripeSubscription = await stripe.subscriptions.cancel(
        stripeSubIdsArray[i]
      );
    }

    // ------------ EMAIL - DELETION SUCCESS --------------
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = user.email;
    const subject = "Váš učet byl plně zrušen";
    const emailBody = `<h4>Dobr&yacute; den!</h4>
<h2>V&aacute;&scaron; &uacute;čet v na&scaron;&iacute; aplikaci Shopr byl plně zru&scaron;en.</h2>
<p>V&scaron;echna předplatn&aacute; jsou deaktivov&aacute;na. Z va&scaron;&iacute; karty se t&iacute;m p&aacute;dem nebudou strh&aacute;vat ž&aacute;dn&eacute; dal&scaron;&iacute; platby. Stejně tak jsme smazali va&scaron;e uživatelsk&eacute; &uacute;daje.</p>
<p>Samozřejmě n&aacute;s mrz&iacute;, že odch&aacute;z&iacute;te, nicm&eacute;ně to naprosto ch&aacute;peme. Je zbytečn&eacute; platit za službu, kterou nepouž&iacute;v&aacute;te, př&iacute;padně kterou nepotřebujete, nebo s n&iacute; nejste spokojeni.</p>
<p>Přejeme V&aacute;m do budoucna to nejlep&scaron;&iacute; a budeme doufat, že se je&scaron;tě někdy zastav&iacute;te.</p>
<p>S pozdravem,</p>
<p>T&yacute;m Shopr</p>`;
    sendEmail(fromEmail, toEmail, subject, emailBody);

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

    // ------------ MONGOOSE - CHECKING IF USER EXISTS --------------
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Nesprávný email");
    }

    // ------------ MONGOOSE - UPDATING USER --------------
    const updateUser = await User.findByIdAndUpdate(
      { _id: user.id },
      { firstName, secondName, phone, address, addressNumber, city, cityNumber }
    );

    // ------------ PIPEDRIVE - UPDATING CONTACT
    const payload = {
      name: firstName + " " + secondName,
      email: email,
      phone: phone,
    };

    const pipeResponse = await pipedriveApiCallV1(
      "persons/" + user.pipedrivePersonId,
      "PUT",
      payload
    );

    console.log(pipeResponse);

    if (!pipeResponse.ok) {
      throw Error("Něco se pokazilo. (Pipedrive)");
    }

    // ------------- STRIPE - creating customer ----------------
    const customer = await stripe.customers.update(user.stripeCustomerId, {
      name: firstName + " " + secondName,
      email: email,
      phone: phone,
    });

    if (!customer) {
      throw Error(
        "Omlouváme se, účet nelze vytvořit. Chyba je na naší straně. (Stripe)"
      );
    }

    res.status(200).json({ ...data });
  } catch (error) {
    res.status(400).json(error.message);
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
    const hashcheckResponse = await Hashcheck.create({
      userId: user._id,
      token: hash,
    });

    //Setting up and sending email
    const url = process.env.PROXY_APP + "/reset/password?hash=" + hash;
    const emailBody = emailTemplatePasswordChange(url);
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = email;
    const subject = "Shopr - Žádost o změnu hesla";
    const response = await sendEmail(fromEmail, toEmail, subject, emailBody);
  }

  res.json(
    "Email s instrukcemi jsme Vám odeslali na vloženou emailovou adresu. Na změnu hesla máte 15 minut. Jakmile heslo změníte, můžete se znovu přihlásit."
  );
};

const resetUserPassword = async (req, res) => {
  const hash = req.query.hash;
  const { password, passwordCheck } = req.body;
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

    if (!password && !passwordCheck) {
      throw Error("Musíte vyplnit obě pole");
    }
    if (password !== passwordCheck) {
      throw Error("Hesla se musí shodovat.");
    }
    if (password.length < 6) {
      throw Error("Heslo musí mít délku alespoň 6 znaků");
    }

    const letterArray = password.split("");
    const checkArray = await letterArray.filter(
      (item) => isFinite(item) && !isNaN(item)
    );
    console.log(letterArray);

    if (checkArray.length == 0) {
      throw Error("Heslo musí mít alespoň jedno číslo");
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
