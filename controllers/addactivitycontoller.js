const activityModel = require("../models/activityModel");

module.exports.addActivity = async (req, res) => {
  try {
    let { activityName, duration, calories, steps, distance, date } = req.body;
    let activity = await activityModel.create({
      activityName: activityName,
      duration: duration,
      calories: calories,
      steps: steps,
      distance: distance,
      date: date,
    });
    res.status(200).send({
      message: "Activity Added Successfully",
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports.viewActivity = async (req, res) => {
  let activity = await activityModel.find();
  res.send(activity);
};

module.exports.deleteActivity = async (req, res) => {
  let id = req.params.id;
  let deletedActivity = await activityModel.deleteOne({ _id: id });
  res
    .status(200)
    .send({ message: "Activity Deleted", activity: deletedActivity });
};

module.exports.updateActivity = async (req, res) => {
  let id = req.params.id;
  let activity = await activityModel.findOne({ _id: id });

  let { activityName, duration, calories, steps, distance, date } = req.body;
  activity.activityName = activityName;
  activity.duration = duration;
  activity.calories = calories;
  activity.steps = steps;
  activity.distance = distance;
  activity.date = date;
  let updateActivity = await activity.save();
  console.log(updateActivity);
  res.send({ message: "Activity Updates" });
};
