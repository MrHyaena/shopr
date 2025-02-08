//basic server settings with all the required functions
//and variables/constants from different files

//requirements
const express = require("express");
const userRouter = require("./routes/userRouter");
const subscriptionRouter = require("./routes/subscriptionRouter");
const mongoose = require("mongoose");
require("dotenv").config();

//express application
const app = express();

//middleware
app.use(express.json());

//router for handling user api calls
app.use("/api/user", userRouter);

//router for handling subscription api calls
app.use("/api/subscription", subscriptionRouter);

//starting server and connecting to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listeing on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
