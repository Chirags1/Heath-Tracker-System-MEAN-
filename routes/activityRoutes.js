const express = require("express");
const {
  addActivity,
  viewActivity,
  deleteActivity,
  updateActivity,
} = require("../controllers/addactivitycontoller");
const router = express.Router();

router.post("/addActivity", addActivity);

router.get("/viewActivity", viewActivity);

router.delete("/deleteActivity/:id", deleteActivity);

router.put("/updateActivity/:id", updateActivity);

module.exports = router;
