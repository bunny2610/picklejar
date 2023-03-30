const express = require("express");
const editUser_router = express.Router();
const newUser = require("../models/newUser");

// editUser_router.get("/editUser", function (req, res) {
//     let newUserId = req.params.newUserId;
//     newUser.findOne({_id : newUserId}, function (err, newUserInfo) {
//          console.log(newUserInfo,newUserId);

//             res.render("editUser",{ newUser : newUserInfo});
//             })
// });

editUser_router.get("/editUser/:newUserId", function (req, res) {
  let newUserId = req.params.newUserId;
  newUser.findOne({ _id: newUserId }, function (err, newUserInfo) {
    res.render("editUser", { newUser: newUserInfo });
  });
});

editUser_router.post("/editUser/:newUserId", async function (req, res) {
  let newUserId = req.params.newUserId;
  await newUser.updateOne(
    { _id: newUserId },
    {
      $set: {
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
      },
    }
  );
  res.redirect("/user");
});

module.exports = editUser_router;
