const express = require("express");
const editEvent_router = express.Router();
const event = require("../models/event");
const category = require("../models/category");

editEvent_router.get("/editEvent/:eventId", async function (req, res) {
  console.log(req.body);
  let eventId = req.params.eventId;

  let categories = await category.find({});
  let eventInfo = await event.findOne({ _id: eventId });
  res.render("editEvent", { event: eventInfo, categories: categories });

  // category.find({}, function (err, foundcategories) {
  //   event.findOne({ _id: eventId }, function (err, eventInfo) {
  //     res.render("editEvent", { event: eventInfo, categories: foundcategories });
  //   });
  // });
});

editEvent_router.post("/editEvent/:eventId", async function (req, res) {
  let file_path = path.resolve("./public/static");
  let error_check = false;

  if (error_check == false) {
    if (
      Array.isArray(req.body.is_featured) &&
      req.body.is_featured.includes("yes")
    ) {
      is_featured = "yes";
    } else {
      is_featured = "no";
    }
    if (
      Array.isArray(req.body.on_demand) &&
      req.body.on_demand.includes("yes")
    ) {
      on_demand = "yes";
    } else {
      on_demand = "no";
    }
    if (
      Array.isArray(req.body.pick_lounge) &&
      req.body.pick_lounge.includes("yes")
    ) {
      pick_lounge = "yes";
    } else {
      pick_lounge = "no";
    }
    if (
      Array.isArray(req.body.tip_something) &&
      req.body.tip_something.includes("yes")
    ) {
      tip_something = "yes";
    } else {
      tip_something = "no";
    }
  }
  let eventid = req.params.eventId;
  await event.updateOne(
    { _id: eventid },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        categories: [req.body.categories],
        artists: req.body.artists,
        attributes: req.body.attributes,
        duration: req.body.duration,
        // is_featured: is_featured,
        // on_demand: on_demand,
        // pick_lounge: pick_lounge,
        // tip_something: tip_something,
        type: req.body.type,
        link: req.body.link,
      },
    }
  );
  res.redirect("/event");
});

module.exports = editEvent_router;
