//requirements
const User = require("../models/userModel");
const Passreset = require("../models/passresetModel");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../email/sendEmail");
require("dotenv").config();
const bcrypt = require("bcrypt");

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
    const user = await User.signup(data);
    //create token
    const token = createToken(user._id);

    res.status(200).json({
      token,
      id: user._id,
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
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      token,
      id: user._id,
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
    const user = await User.delete(email, password);

    //delete user
    const token = createToken(user._id);

    res.status(200).json({ msg: "deleted", email, token });
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
    const user = await User.update(data);

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

    //Creating record in Passreset database
    const passreset = await Passreset.create({ userId: user._id, token: hash });

    //Setting up and sending email
    const url = process.env.PROXY_APP + "reset/password?hash=" + hash;
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
  const hashObject = await Passreset.findOne({ token: hash });
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

module.exports = {
  signupUser,
  loginUser,
  deleteUser,
  updateUser,
  resetUserEmail,
  resetUserPassword,
};
