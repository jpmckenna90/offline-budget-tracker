const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://budgetuser:budgetpassword1@ds345597.mlab.com:45597/heroku_5kn9x9g2"

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./Develop/routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});