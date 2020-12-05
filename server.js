const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(
    "mongodb+srv://master:master!@cluster0.jr2zh.mongodb.net/FitnessTracker?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);
// app.use(workoutRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("app is listening");
})