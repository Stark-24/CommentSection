const Sequelize = require("sequelize");
const connection = require("./index.js");

const Comments = connection.define(
  "Comments",
  {
    text: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    song_time: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    id_users: {
      type: Sequelize.NUMBER(10),
      allowNull: false
    },
    time_created: {
      type: Sequelize.STRING(20),
      allowNull: false
    }
  },
  { timestamps: false }
);

const Users = connection.define(
  "Users",
  {
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

const Replies = connection.define(
  "Replies",
  {
    id_comments: {
      type: Sequelize.NUMBER(10),
      allowNull: false
    },
    text: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    time_created: {
      type: Sequelize.NUMBER(20),
      allowNull: false
    },
    id_users: {
      type: Sequelize.NUMBER(20),
      allowNull: false
    }
  },
  { timestamps: false }
);

connection.sync({ force: false });

module.exports = {
  Comments,
  Users,
  Replies
};
