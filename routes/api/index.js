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

router.delete("/workouts", async (req, res) => {
  console.log("will delete workouts  late");
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const newWorkout = await workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    );
    console, log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
