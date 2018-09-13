const { Comments } = require("./db/models.js");
const { Users } = require("./db/models.js");

exports.fetchAllComments = (req, res) => {
  console.log("In fetchAllComments...");
};

exports.createOneComment = (req, res) => {
  console.log("In createOneComment...");
};

exports.eraseOneComment = (req, res) => {
  console.log("In eraseOneComment...");
};

exports.fetchAllCommentReplies = (req, res) => {
  console.log("In fetchAllCommentReplies...");
};
