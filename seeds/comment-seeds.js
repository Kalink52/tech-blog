const { Comment } = require("../models");

const commentData = [
  {
    body: "this is a really long string of text",
    user_id: "1",
    post_id: "1",
  },
  {
    body: "this is a second post attached to the comment",
    user_id: "2",
    post_id: "1",
  },
  {
    body: "this is a really long string of text",
    user_id: "1",
    post_id: "3",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
