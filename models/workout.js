// workout model
// variables for mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter a type of Exercise"
        },
        name: {
            type: String,
            trip: true,
            required: "Enter the name of the Exercise"
        },
        duration: {
            type: Number,
            trip: true,
            required: "Enter the duration of your Exercise in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
