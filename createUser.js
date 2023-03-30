const express = require("express");
const createUser_router = express.Router();
const newUser = require("../models/newUser");

createUser_router.get("/createUser", function (req, res) {
  res.render("createUser");
});

createUser_router.post("/createUser", function (req, res) {
  console.log(req.body);
  const userInfo = newUser({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    from: req.body.from,
    to: req.body.to,
    password: req.body.password,
    options: req.body.options == "yes",

    subscription: {
      ANDROID: req.body.ANDROID == "yes",
      APPLE: req.body.APPLE == "yes",
      SAMSUNG: req.body.SAMSUNG == "yes",
      Roku: req.body.Roku == "yes",
    },
  });
  userInfo.save(function (err) {
    if (err) {
    } else {
      res.redirect("/user");
    }
  });
});

module.exports = createUser_router;
