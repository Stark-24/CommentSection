const postgres = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("commentsdb", "alaahussein", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  operatorsAliases: Sequelize.Op
});

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.log("Error connecting to the database...", err));

module.exports = connection;
