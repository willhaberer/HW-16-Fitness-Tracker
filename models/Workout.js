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
        type: String,
      },
      duration: {
        type: String,
      },
      weight: {
        type: String,
      },
      sets: {
        type: String,
      },
    },
  ],
  //need something for day
  day: {
    type: Date,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
