const express = require("express");
const video_router = express.Router();
const Video = require("../models/video");
const Category = require("../models/category");

video_router.get("/videos", async function (req, res) {
  let videos = await Video.find({});
  res.send(videos);
});

module.exports = video_router;
