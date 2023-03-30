//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
var path = require("path");
const auth_router = require("./routes/auth");
const category_router = require("./routes/category");
const createvideo_router = require("./routes/createvideo");
const createEvent_router = require("./routes/createEvent");
const video_router = require("./routes/video");
const event_router = require("./routes/event");
const user_router = require("./routes/user");
const setting_router = require("./routes/setting");
const editUser_router = require("./routes/editUser");
const editEvent_router = require("./routes/editEvent");
const createUser_router = require("./routes/createUser");
const fileUpload = require("express-fileupload");
var sessions = require("express-session");
var cookieParser = require("cookie-parser");
const api_router = require("./api_routes");
var cors = require("cors");
mongoose.connect("mongodb://localhost:27017/userDb", { useNewUrlparser: true });

app.use(
  cors({
    origin: "*",
  })
);
10;
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload());

app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

app.use("/api", api_router);

app.use(/\/((?!login).)*/, (req, res, next) => {
  let session = req.session;
  let userId = session.userId;
  if (userId) {
    next();
  } else {
    res.redirect("/login");
  }
});

app.use(cookieParser());
app.use("", auth_router);
app.use("", category_router);
app.use("", createvideo_router);
app.use("", createEvent_router);
app.use("", video_router);
app.use("", event_router);
app.use("", user_router);
app.use("", createUser_router);
app.use("", editUser_router);
app.use("", editEvent_router);
app.use("", setting_router);

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
