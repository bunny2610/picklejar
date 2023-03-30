const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let settingSchema = new Schema({
  token: String,
  password: String,
  // login: String,
  sub: Boolean,
  login: Boolean,
  subscription: {
    Roku: Boolean,
    APPLE: Boolean,
    SAMSUNG: Boolean,
    ANDROID: Boolean,
  },
});

let setting = mongoose.model("setting", settingSchema);

module.exports = setting;
