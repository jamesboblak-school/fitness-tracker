// Variable to npm modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Lcoal PORT: 3000
const PORT = process.env.PORT || 3000;

// variable for express function
const app = express();

// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// connect localhost to database
mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

// require routes
require("./routes/routes.js");

app.listen(PORT, () => {
    console.log(`Fitness Tracker running on PORT ${PORT}!!`);
});
