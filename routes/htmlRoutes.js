// routes to HTML pages 
var path = require("path");

module.exports = function (app) {
    // exercise.html calls from index.html Continue Workout or New Workout buttons
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // stats.html calls
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
