const { Comment } = require('../models');

const commentData = [
  {
    body: 'this is a really long string of text',
    user_id: '1',
    post_id: '1',
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;