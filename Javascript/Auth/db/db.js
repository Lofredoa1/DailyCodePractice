require("dotenv").config();
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const { DATABASE_URL } = process.env;

// Create Connection
mongoose.connect(DATABASE_URL, config);

// DB Events
mongoose.connection
  .on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("Mongo connection closed"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
