const router = require("express").Router();
const { Workout } = require("../../models");

//get all workouts
router.get("/workouts", async (req, res) => {
  try {
    const duration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    console.log(duration);
    res.json(duration);
  } catch (err) {
    console.log(err);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const duration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.json(duration);
  } catch (err) {
    console.log(err);
  }
});

//create new workout
router.post("/workouts", async (req, res) => {
  try {
    const workout = await Workout.create({});
    res.json(workout);
  } catch (err) {
    console.log(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    );
    console.log(updatedWorkout);
    res.json(updatedWorkout);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
