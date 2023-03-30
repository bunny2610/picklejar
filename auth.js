const express = require("express");
const auth_router = express.Router();
let alert = require("alert");
const User = require("../models/user");
const Video = require("../models/video");
const newUser = require("../models/newUser");
const event = require("../models/event");
const jwt = require("jsonwebtoken");
require("dotenv").config();

auth_router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await User.findOne({ email: email });
    console.log(email, password, useremail);
    if (useremail.password === password) {
      const token = jwt.sign({ userId: useremail._id }, process.env.JWT_SECRET);
      res.send({
        success: true,
        token: token,
      });
    } else {
      res.send({
        success: false,
        error: "password is not correct",
      });
      console.log("pasword is not matching");
    }
  } catch (error) {
    res.send({
      success: false,
      error: "invalid email",
    });
    console.log(error);
    console.log("invalid Email");
  }
});

module.exports = auth_router;
