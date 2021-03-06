const { Comments } = require("./db/models.js");
const { Users } = require("./db/models.js");
const date = new Date();
const current_hour = date.getHours();
const currrent_min = date.getMinutes();
const currrent_sec = date.getSeconds();

exports.fetchAllComments = (req, res) => {
  console.log("In fetchAllComments...");
  Comments.findAll({})
    .then(comments => {
      if (comments) {
        res.status(200).send(comments);
      } else {
        res.status(404).send("Comments not found");
      }
    })
    .catch(err => res.status(404).send(err));
};

exports.createOneComment = (req, res) => {
  console.log("In createOneComment...");
  console.log("req.body", req.body);
  const { id, text } = req.body;
  Comments.create({
    id: id,
    text: text,
    song_time: "0:01:56",
    time_created: `${current_hour}:${currrent_min}:${currrent_sec}`,
    UserId: 101,
    replies_id: null
  })
    .then(comment => {
      console.log("created comment", comment);
      res.status(201).send("Comment Created");
    })
    .catch(err => {
      console.log("error creating comment", err);
      res.status(404).send(err);
    });
};

exports.eraseOneComment = (req, res) => {
  console.log("In eraseOneComment...");
  const { id } = req.body;
  Comments.destroy({
    where: { id: id }
  })
    .then(() => {
      res.status(202).send("Comment deleted");
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

exports.fetchAllCommentReplies = (req, res) => {
  console.log("In fetchAllCommentReplies...");
  console.log(req.body);
  const { replies_id } = req.body;
  Comments.findAll({
    where: { replies_id: replies_id }
  })
    .then(Replies => {
      if (Replies) {
        res.status(200).send(Replies);
      } else {
        res.status(404).send("Replies not found");
      }
    })
    .catch(err => res.status(404).send(err));
};

exports.fetchAllUsers = (req, res) => {
  console.log("In fetchAllUsers...");
  console.log("req.body in fetchAllUsers", req.body);
  Users.findAll({})
    .then(users => {
      if (users) {
        res.status(200).send(users);
      } else {
        res.status(404).send("Users not found");
      }
    })
    .catch(err => res.status(404).send(err));
};
