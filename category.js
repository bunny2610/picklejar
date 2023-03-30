const express = require("express");
const categories_router = express.Router();
const Video = require("../models/video");
const Category = require("../models/category");

video_router.get("/categories", async function (req, res) {
  let categories = await Video.find({});
  res.send(categories);
});

module.exports = categories_router;
