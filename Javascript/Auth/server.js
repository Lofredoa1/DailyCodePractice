require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("./db/db");
const AuthRouter = require("./controllers/user");
const auth = require("./auth_utility");

// Create Express App
const app = express();
const { PORT = 3000 } = process.env;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// ROUTERS
app.use("/", auth, (req, res) => {
    res.json(req.payload);
  });
app.use("/auth", AuthRouter);

// LISTENERS
app.listen(PORT, () => {
  console.log(`You are listening on Port ${PORT}`);
});
