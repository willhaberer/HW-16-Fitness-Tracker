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

//create new workout
router.post("/workouts", async (req, res) => {
  try {
    const workout = await workout.create({});
    console.log(workout);
    res.json(workout);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/workouts", (req, res) => {
  console.log("will delete workouts  late");
});

module.exports = router;
