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
  emailTemplateDeleteUser,
} = require("../email/emailTemplates");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//create token function
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "90d" });
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
    if (!email || !password || !firstName || !secondName || !phone || !terms) {
      throw Error("Musíte vyplnit všechna pole");
    }

    //password validation
    if (password.length < 6) {
      throw Error("Heslo musí mít alespoň 6 znaků");
    }

    if (password != passwordCheck) {
      throw Error("Hesla se musí shodovat");
    }

    const letterArray = password.split("");
    const checkArray = await letterArray.filter(
      (item) => isFinite(item) && !isNaN(item)
    );

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
      process.env.PROXY_SERVER +
      "/api/user/activate/authorized/?hash=" +
      emailHash;

    const toEmail = email;
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const subject = "Aktivace účtu";
    const emailBody = emailTemplateActivateAccount(URL);

    const emailResponse = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody,
      false
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
    const user = await User.findOneAndDelete({
      email: email,
    });
    res.status(400).json({ error: error.message });
  }
};

//login user controller function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // -------------- TURNSTILE CAPTCHA VERIFICATION ----------

    //const captcha = await fetch(
    //  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    //  {
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({
    //      secret: process.env.TURNSTILE_SECRET,
    //      response: captchaToken,
    //    }),
    //  }
    //);
    //
    //if (!captcha.ok) {
    //  throw Error("Ověření Captcha se nepovedlo. Zkuste to prosím znovu.");
    //}

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
      if (doc.stripeSubId != "empty") {
        stripeSubIdsArray.push(doc.stripeSubId);
      }
      pipeDealIdsArray.push(doc.pipedriveDealId);
      mongoSubArray.push(doc._id);
    }

    console.log("mongoose find all subscriptions");

    // ------------ STRIPE - CANCELING ALL SUBSCRIPTIONS --------------
    if (stripeSubIdsArray.length > 0) {
      for (let i = 0; i < stripeSubIdsArray.length; i++) {
        const stripeSubscription = await stripe.subscriptions.cancel(
          stripeSubIdsArray[i]
        );
      }
    }

    console.log("stripe delete all subscriptions");

    // ------------ MONGOOSE - CHECKING DATABASE FOR USER AND DELETING HIM --------------
    const user = await User.findByIdAndDelete({ _id: id });

    if (!user) {
      throw Error("Účet neexistuje");
    }

    console.log("mongoose delete user");

    // ------------ MONGOOSE - DELETING ALL SUBSCRIPTIONS --------------
    for (let i = 0; i < mongoSubArray.length; i++) {
      const subscriptions = await Subscription.findByIdAndDelete({
        _id: mongoSubArray[i],
      });
    }

    console.log("mongoose delete all subscription");

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

    console.log("getting all tasks");

    //getting the ids in the joined strings
    const taskIds = activitiesIds.join(",");
    const dealIds = pipeDealIdsArray.join(",");

    //function call for actual deletion
    const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV1(
      "activities?ids=" + taskIds,
      "DELETE"
    );

    console.log("pipedrive tasks delete");

    const pipeDeleteDealsBulkcall = await pipedriveApiCallV1(
      "deals?ids=" + dealIds,
      "DELETE"
    );

    console.log("pipderive deals delete");

    // ------------ EMAIL - DELETION SUCCESS --------------
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = user.email;
    const subject = "Váš učet byl plně zrušen";
    const emailBody = emailTemplateDeleteUser(user.email);
    sendEmail(fromEmail, toEmail, subject, emailBody, false);

    console.log("email");

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
    if (!email || !firstName || !secondName || !phone) {
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

    if (!pipeResponse.ok) {
      throw Error("Něco se pokazilo. (Pipedrive)");
    }

    // ------------- STRIPE - creating customer ----------------

    try {
      const customer = await stripe.customers.update(user.stripeCustomerId, {
        name: firstName + " " + secondName,
        email: email,
        phone: phone,
      });
    } catch {
      throw Error(
        "Omlouváme se, ale údaje nelze změnit. Chyba je na naší straně. (Stripe)"
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
    const subject = "Žádost o změnu hesla";
    const response = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody,
      false
    );
  }

  res.json(
    "Email s instrukcemi jsme Vám odeslali na vloženou emailovou adresu. Na změnu hesla máte 15 minut. Jakmile heslo změníte, můžete se znovu přihlásit."
  );
};

const resetUserPassword = async (req, res) => {
  const hash = req.query.hash;
  const { password, passwordCheck } = req.body;
  const hashObject = await Hashcheck.findOne({ token: hash });
  //Dates
  const hashObjectDate = await hashObject.createdAt.getTime();
  const nowDate = await Date.now();
  const tenMinutes = 15 * 60 * 1000;

  try {
    if (nowDate - hashObjectDate > tenMinutes) {
      throw Error(
        "Změna hesla již není možná. Časový limit 15 minut byl přesažen. Přejděte na přihlašovací obrazovku a zopakujte prosím požadavek na změnu hesla."
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

const authorization = async (req, res) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    throw Error("Authorization token required");
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    res.status(200).json("VerificationSuccess");
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: "Request is not authorized/user logged out",
      errorMessage: error.name,
    });
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
  authorization,
};
