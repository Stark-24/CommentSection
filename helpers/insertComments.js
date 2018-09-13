const commentsData = require("../data/CommentsMockData.json");
const { Comments } = require("../server/db/models.js");

const insertComments = function(commentsData) {
  commentsData.forEach(commentData => {
    let counter = 0;
    Comments.create({
      id: commentData.id,
      text: commentData.text,
      song_time: commentData.song_time,
      time_created: commentData.time_created,
      users_id: commentData.users_id,
      replies_id: commentData.replies_id
    })
      .then(comment => {
        counter++;
        console.log("Mock comments loaded to DB", counter, comment.dataValues);
      })
      .catch(err => {
        console.log("err loading comments to DB", err);
      });
  });
};

insertComments(commentsData);
