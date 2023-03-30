const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let newUserSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  from: String,
  to: String,
  options: Boolean,
  password: String,
  subscription: {
    Roku: Boolean,
    APPLE: Boolean,
    SAMSUNG: Boolean,
    ANDROID: Boolean,
  },
});

let newUser = mongoose.model("newUser", newUserSchema);

module.exports = newUser;
