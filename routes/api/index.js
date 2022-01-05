const router = require("express").Router();
const workout = require("../../models/Workout.js");

//get all workouts
router.get("/workouts", async (req, res) => {
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

router.get("/workouts/range", (req, res) => {
  workout
    .aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
    .limit(7)
    .sort({ day: -1 })

    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create new workout
router.post("/workouts", async (req, res) => {
  workout
    .create(req.body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
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
    console.log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
