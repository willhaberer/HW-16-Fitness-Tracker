const router = require("express").Router();
const workout = require("../../models/Workout.js");

//get all workouts
router.get("/api/workouts", async (req, res) => {
  workout
    .find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
