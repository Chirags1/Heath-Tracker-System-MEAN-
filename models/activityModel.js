const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  activityName: String,
  duration: Number,
  calories: Number,
  steps: Number,
  distance: Number,
  date: Date,
});

const activityModel = mongoose.model("activity", activitySchema);
module.exports = activityModel;
