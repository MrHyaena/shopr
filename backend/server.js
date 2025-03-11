//basic server settings with all the required functions
//and variables/constants from different files

//requirements
const express = require("express");
const userRouter = require("./routes/userRouter");
const subscriptionRouter = require("./routes/subscriptionRouter");
const stripeRouter = require("./routes/stripeRouter");
const emailRouter = require("./routes/emailRouter");
const crmRouter = require("./routes/crmRouter");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//express application
const app = express();

//middleware
app.use(cors());

//router for handling user api calls
app.use("/api/user", express.json(), userRouter);

//router for handling subscription api calls
app.use("/api/subscriptions", express.json(), subscriptionRouter);

//router for stripe handling
app.use("/api/stripe", stripeRouter);

//router for stripe handling
app.use("/api/email", express.json(), emailRouter);

//router for pipedrive handling
app.use("/api/pipedrive", express.json(), crmRouter);

//router for admin
app.use("/api/admin", express.json(), adminRouter);

//starting server and connecting to database
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Shopr",
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
