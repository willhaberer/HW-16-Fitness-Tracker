const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
