const router = require("express").Router();
const controller = require("./controller.js");

router
  .route("/comments")
  .get(controller.fetchAllComments)
  .post(controller.createOneComment)
  .delete(controller.eraseOneComment);

router.route("/replies").get(controller.fetchAllCommentReplies);

module.exports = router;
