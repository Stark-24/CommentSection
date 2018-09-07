const express = require("express");
const parser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
// const router = require('./routes.js');

//Express Application
const app = express();

//Middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(morgan("dev"));

//Routes
// app.use('/api', router);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to StarkCloud!" });
});

//Export
module.exports = app;
