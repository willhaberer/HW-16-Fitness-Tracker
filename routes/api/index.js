const router = require("express").Router();
const { Workout } = require("../../models");

//get all workouts
router.get("/workouts", async (req, res) => {
  if (workout.type === "cardio") {
    workout.aggregate([
      {
        $addFields: {
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);
  }

  workout.aggregate([
    {
      $addFields: {
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ]);

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

router.get("/workouts/range", async (req, res) => {
  try {
    const workoutDuration = await workout
      .aggregate([
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
    res.json(workoutDuration);
  } catch (err) {
    console.log(err);
  }
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
