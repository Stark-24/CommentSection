const Sequelize = require("sequelize");
const connection = require("./index.js");

const Comments = connection.define(
  "Comments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    song_time: {
      type: Sequelize.STRING,
      allowNull: false
    },
    time_created: {
      type: Sequelize.STRING,
      allowNull: false
    },
    replies_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  { timestamps: false }
);

const Users = connection.define(
  "Users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pic: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);

Users.hasMany(Comments);
Comments.belongsTo(Users);

connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports = {
  Comments,
  Users
};
