const postgres = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("commentsDb", "root", "", {
  host: "localhost",
  dialect: "postgres"
});

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.log("Error connecting to the database...", err));

module.exports = connection;
