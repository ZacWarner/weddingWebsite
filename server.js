require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const passport = require('passport');
const PORT = process.env.PORT || 3001;
const app = express();

const api = require('./routes/api');


const options = {
  user: process.env.MONGO_LOGIN,
  pass: process.env.MONGO_PSW,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
};

// Mongoose Deprecations
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, options)
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
