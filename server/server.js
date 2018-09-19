const express = require("express");
const parser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const db = require("./db/index.js");
const router = require("./routes.js");
const cors = require("cors");

//Express Application
const app = express();

//Middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static(path.resolve(__dirname, "../static/")));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to StarkCloud!" });
});

//Export
module.exports = app;
