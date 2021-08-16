// routes to HTML pages 
var path = require("path");

module.exports = (app) => {
    // exercise.html calls from index.html Continue Workout or New Workout buttons
    app.get("/exercise", (req, res) => {
        res(path.join(__dirname, "../public/exercise.html"));
    });

    // stats.html calls
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stat.html"))
    })

}
