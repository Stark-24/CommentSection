const postgres = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("commentsdb", "postgres", "example", {
  // host: "172.31.12.146",
  host: "db",
  dialect: "postgres",
  port: 5432,
  operatorsAliases: false
});

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.log("Error connecting to the database...", err));

module.exports = connection;
