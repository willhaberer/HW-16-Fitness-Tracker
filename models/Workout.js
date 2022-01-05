const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
  //need something for day
  day: {
    type: Date,
    default: () => new Date(),
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
