const Sequelize = require("sequelize");
const connection = require("./index.js");

const Comments = connection.define(
  "Comments",
  {
    id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    text: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    song_time: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    time_created: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    users_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    replies_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    }
  },
  { timestamps: false }
);

const Users = connection.define(
  "Users",
  {
    id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    pic: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  },
  { timestamps: false }
);

Users.hasMany(Comments, { foreignKey: "users_id" });
Comments.belongsTo({ foreignKey: "users_id" });

connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports = {
  Comments,
  Users
};
