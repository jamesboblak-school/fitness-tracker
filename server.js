// Load seed data
// ! require("./seeders/seed");

// Variable to npm modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Lcoal PORT: 3000
const PORT = process.env.PORT || 3000;

// variable for express function
const app = express();

// variable for db
const db = require("./models")

// middleware
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(express.static("public"));

// connect localhost to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// require routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Fitness Tracker running on PORT ${PORT}!!`);
});
