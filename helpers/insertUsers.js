const usersData = require("../data/UsersMockData.json");
const { Users } = require("../server/db/models.js");

const insertUsers = function(usersData) {
  let counter = 0;
  usersData.forEach(userData => {
    Users.create({
      id: userData.id,
      username: userData.username,
      pic: userData.pic
    })
      .then(user => {
        counter++;
        console.log("Mock comments loaded to DB", counter, user.dataValues);
      })
      .catch(err => {
        console.log("err loading comments to DB", err);
      });
  });
};

insertUsers(usersData);
