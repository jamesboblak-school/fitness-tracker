// API routes
// variable to hold database
var db = require("../models");

module.exports = function (app) {
    // get last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // create new workout
    app.post("/api/workouts", async (req, res)=> {
        try {
            const response = await db.Workout.create({
                type: "workout"
            })
            res.json(response);
        } catch (err) {
            console.log("error occurred creating workout: ", err)
        }
    })

    // add exercise to Workout
    app.put("/api/workouts/:id", ({
        body,
        params
    }, res) => {
        console.log("params: " + body, params);
        const workoutId = params.workoutId;
        let savedExercises = [];

        // get saved exercises for workout
        db.Workout.find({
                _id: workoutId
            })
            .then(dbWorkout => {
                console.log(dbWorkout);
                savedExercises = dbWordkout[0].exercises;
                res.json(dbWorkout[0].exercisses);
                let allExercices = [...savedExercises, body]
                console.log(allExercises);
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, {
                exercises: exercises
            }, function(err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        }
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};