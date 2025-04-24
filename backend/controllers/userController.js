//Router for subscriptions handling
// ---------------------------------------------------

//requirements
require("dotenv").config();
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

//Mongoose models
const User = require("../models/userModel");
const Subscription = require("../models/subscriptionModel");
const Hashcheck = require("../models/hashcheckModel");
const Agreement = require("../models/agreementModel");

//Email functions and templates
const { sendEmail } = require("../email/sendEmail");
const {
  emailTemplateActivateAccount,
  emailTemplatePasswordChange,
  emailTemplateDeleteUser,
} = require("../email/emailTemplates");

//Pipedrive functions
const {
  pipedriveApiCallV1,
  pipedriveApiCallDeleteV2,
  pipedriveApiCallV2,
} = require("../functions/pipedriveApiCall");

//Stripe init
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//Function for creating token for future authorization
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "90d" });
}

//Signup user controller function
const signupUser = async (req, res) => {
  //Getting data from request body
  const data = req.body;
  const {
    password,
    passwordCheck,
    firstName,
    secondName,
    phoneCountry,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
    terms,
    marketing,
  } = data;

  //Email to lower case
  const email = data.email.toLowerCase();

  try {
    // ------------ VALIDATION OF DATA FROM FORM --------------
    const missingData = [];

    if (!email) {
      missingData.push("Email");
    }

    if (!password) {
      missingData.push("Heslo");
    }

    if (!firstName) {
      missingData.push("Jméno");
    }

    if (!secondName) {
      missingData.push("Příjmení");
    }

    if (!phoneCountry) {
      missingData.push("Předvolba");
    }

    if (!phone) {
      missingData.push("Telefon");
    }

    if (missingData.length > 0) {
      throw Error(
        "Musíte vyplnit všechna pole. Chybí: " + missingData.join(" | ")
      );
    }

    //Password validation
    if (password.length < 6) {
      throw Error(
        "Heslo musí mít alespoň 6 znaků, z toho minimálně jedno číslo."
      );
    }
    if (password != passwordCheck) {
      throw Error("Hesla se musí shodovat");
    }
    const letterArray = password.split("");
    const checkArray = await letterArray.filter(
      (item) => isFinite(item) && !isNaN(item)
    );

    //Validation length and characters
    if (checkArray.length == 0) {
      throw Error(
        "Heslo musí mít alespoň 6 znaků, z toho minimálně jedno číslo."
      );
    }

    //Term accepted
    if (terms == false) {
      throw Error("Musíte souhlasit s obchodními podmínkami a Podmínkami GDPR");
    }

    //Email validation
    if (!validator.isEmail(email)) {
      throw Error("Emailová adresa není platná");
    }

    //User Exists or not
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("Email již existuje");
    }

    // ------------- STRIPE - creating customer ----------------
    //creating stripe customer
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
    //Pipedrive payload for api call
    const payload = {
      name: firstName + " " + secondName,
      owner_id: process.env.PIPEDRIVE_ADMIN_ID,
      email: [{ value: email, label: "osobni" }],
      phone: [{ value: phone, label: "osobni" }],
    };

    //Pipedrive api call
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
    //hashing password with salt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    //Creating user record
    const user = await User.create({
      active: false,
      email: email,
      password: hash,
      pipedrivePersonId: pipePerson.data.id,
      stripeCustomerId: customer.id,
      firstName,
      secondName,
      phoneCountry,
      phone,
      terms,
      marketing,
    });

    // ------------------- MONGOOSE - creating agreement record ----------------------------
    //Creating terms and GDPR record
    const agreement = await Agreement.create({
      firstName,
      secondName,
      email,
      phone,
      terms,
      marketing,
    });

    // ------------------- EMAIL VERIFICATION - creating database hash record and sending email with URL request for checking ----------------------------
    //Hashing record for account activation
    const emailSalt = await bcrypt.genSalt(10);
    const emailHash = await bcrypt.hash(
      process.env.EMAIL_ACTIVATION_SECRET,
      emailSalt
    );

    //Writing record to hashcheck database for future activation
    const hashcheckRespone = Hashcheck.create({
      userId: user._id,
      token: emailHash,
    });

    //Creating URL for user to go on
    const URL =
      process.env.PROXY_SERVER +
      "/api/user/activate/authorized/?hash=" +
      emailHash;

    //Creating email data
    const toEmail = email;
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const subject = "Aktivace účtu";
    const emailBody = emailTemplateActivateAccount(URL);

    //Sending activation email
    const emailResponse = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody,
      false
    );

    // ------------------- EMAIL NOTIFICATION - for admin ----------------------------
    const adminEmail = "admin@shopr.cz";
    const fromAdmin = "App - info <info@shopr.cz>";
    const adminSubject = "Nový uživatel";
    const adminBody = "<h1>Registrace nového uživatele.</h1>";

    const adminResponse = await sendEmail(
      fromAdmin,
      adminEmail,
      adminSubject,
      adminBody,
      false
    );

    //create token
    const token = createToken(user._id);

    //Sending back data - NOT USED NOW BECAUSE OF ACTIVATION
    res.status(200).json({
      active: false,
      token,
      id: user._id,
      pipedrivePersonId: pipePerson.data.id,
      stripeCustomerId: user.stripeCustomerId,
      email,
      phoneCountry,
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

//Login user controller function
const loginUser = async (req, res) => {
  //Getting data from request body
  const { email, password } = req.body;

  try {
    //Validation if email and password exists
    if (!email || !password) {
      throw Error("Musíte vyplnit všechna pole");
    }

    //Validation if User exists in our database
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      throw Error("Nesprávný email nebo heslo.");
    }

    //Validation of matching password with database password hash
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Nesprávný email nebo heslo.");
    }

    //Validation of user active status
    if (!user.active) {
      throw Error(
        "Účet zatím nebyl aktivován. Na Váš email jsme odeslali zprávu s aktivačním odkazem. Kliknutím na odkaz v emailu účet aktivujete."
      );
    }

    //Create token for future authorization
    const token = createToken(user._id);

    res.status(200).json({
      token,
      active: user.active,
      id: user._id,
      pipedrivePersonId: user.pipedrivePersonId,
      stripeCustomerId: user.stripeCustomerId,
      email: user.email,
      phoneCountry: user.phoneCountry,
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

//Delete user controller function
const deleteUser = async (req, res) => {
  //Getting ID from URL parameters
  const { id } = req.params;

  try {
    // ------------ MONGOOSE - FINDING ALL SUBSCRIPTIONS AND GETTING THEIR DATA--------------

    //Filling array for pipedrive, stripe and mongoose
    const pipeDealIdsArray = [];
    const stripeSubIdsArray = [];
    const mongoSubArray = [];
    const subscriptions = await Subscription.find({ userId: id }).cursor();
    for (
      let doc = await subscriptions.next();
      doc != null;
      doc = await subscriptions.next()
    ) {
      if (doc.active == true) {
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

    //Getting all the tasks from pipedrive
    const pipeActivities = await pipedriveApiCallV2("activities", "GET");

    const activitiesJson = await pipeActivities.json();

    //Filtering the tasks with conditions
    const activitiesForDeletion = await activitiesJson.data.filter(
      (item) =>
        item.done == false &&
        item.person_id == user.pipedrivePersonId &&
        item.is_deleted == false
    );

    //Creating array from task ids
    const activitiesIds = activitiesForDeletion.map((item) => {
      return item.id;
    });

    console.log("getting all tasks");

    //Getting the ids in the joined strings
    const taskIds = activitiesIds.join(",");
    const dealIds = pipeDealIdsArray.join(",");

    //Function call for actual task deletion in pipedrive
    const pipeDeleteActivitiesBulkcall = await pipedriveApiCallV1(
      "activities?ids=" + taskIds,
      "DELETE"
    );

    console.log("pipedrive tasks delete");

    //Function call for actual deal deletion in pipedrive
    const pipeDeleteDealsBulkcall = await pipedriveApiCallV1(
      "deals?ids=" + dealIds,
      "DELETE"
    );

    console.log("pipderive deals delete");

    // ------------ EMAIL - DELETION SUCCESS --------------
    //Creating email data
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = user.email;
    const subject = "Váš učet byl plně zrušen";
    const emailBody = emailTemplateDeleteUser(user.email);
    //Sending deletion email to user
    sendEmail(fromEmail, toEmail, subject, emailBody, false);

    console.log("email");
    console.log("User deletion was successful");

    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update user controller function
const updateUser = async (req, res) => {
  //Getting data from request body
  const data = req.body;
  const {
    firstName,
    secondName,
    email,
    phoneCountry,
    phone,
    address,
    addressNumber,
    city,
    cityNumber,
  } = data;

  try {
    // ------------ VALIDATION OF DATA --------------
    const missingData = [];
    if (!email) {
      missingData.push("Email");
    }

    if (!firstName) {
      missingData.push("Jméno");
    }

    if (!secondName) {
      missingData.push("Příjmení");
    }

    if (!phone) {
      missingData.push("Telefon");
    }

    if (missingData.length > 0) {
      const missingJoin = missingData.join(" / ");
      throw Error("Musíte vyplnit všechna pole, chybí: " + missingJoin);
    }

    // ------------ MONGOOSE - CHECKING IF USER EXISTS --------------
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Nesprávný email");
    }

    // ------------ MONGOOSE - UPDATING USER --------------
    const updateUser = await User.findByIdAndUpdate(
      { _id: user.id },
      {
        firstName,
        secondName,
        phoneCountry,
        phone,
        address,
        addressNumber,
        city,
        cityNumber,
      }
    );

    // ------------ PIPEDRIVE - UPDATING CONTACT
    const payload = {
      name: firstName + " " + secondName,
      email: email,
      phone: phone,
    };

    //Pipedrive api call
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

//Reset user password email controller function
const resetUserPasswordEmail = async (req, res) => {
  //Getting data from URL query
  const email = req.query.email;

  // ------------ MONGOOSE - get user --------------
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

    // ------------ EMAIL - send message to user with password change --------------
    //Creating email data
    const url = process.env.PROXY_APP + "/reset/password?hash=" + hash;
    const emailBody = emailTemplatePasswordChange(url);
    const fromEmail = process.env.SMTP_EMAIL_INFO;
    const toEmail = email;
    const subject = "Žádost o změnu hesla";
    //Sending email
    const response = await sendEmail(
      fromEmail,
      toEmail,
      subject,
      emailBody,
      false
    );
  }

  //Response is send every time because of security, so that attackers cant match email to site
  res.json(
    "Email s instrukcemi jsme Vám odeslali na vloženou emailovou adresu. Na změnu hesla máte 15 minut. Jakmile heslo změníte, můžete se znovu přihlásit."
  );
};

//Reset user password call controller function
const resetUserPassword = async (req, res) => {
  //Getting data from query and request body
  const hash = req.query.hash;
  const { password, passwordCheck } = req.body;

  // ------------ MONGOOSE - find hachcheck object for time validation --------------
  const hashObject = await Hashcheck.findOne({ token: hash });
  //Getting right date
  const hashObjectDate = await hashObject.createdAt.getTime();
  const nowDate = await Date.now();
  const tenMinutes = 15 * 60 * 1000;

  try {
    if (nowDate - hashObjectDate > tenMinutes) {
      throw Error(
        "Změna hesla již není možná. Časový limit 15 minut byl přesažen. Přejděte na přihlašovací obrazovku a zopakujte prosím požadavek na změnu hesla."
      );
    }

    //Request data validation
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

    //Hashing new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Updating user in mongoose database
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

//Activate user controller function
const activateUser = async (req, res) => {
  //Getting data from query
  const hash = req.query.hash;

  //Getting data from hashcheck object
  const hashObject = await Hashcheck.findOne({ token: hash });

  try {
    //Updating user to active in mongoose database
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

//Authorization controller function - used for checking if token is still valid
const authorization = async (req, res) => {
  //Getting data from req headers
  const { authorization } = req.headers;
  if (!authorization) {
    throw Error("Authorization token required");
  }

  //Getting token
  const token = authorization.split(" ")[1];

  try {
    //Verifying token date
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
  resetUserPasswordEmail,
  resetUserPassword,
  activateUser,
  authorization,
};
