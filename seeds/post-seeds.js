const { Post } = require('../models');

const postData = [
  {
    user_id: '1',
    title: 'new tech thingies',
    body: 'this is a really long string of text',
    // comment_id: ''
  },
  {
    user_id: '2',
    title: 'Fun thingies',
    body: 'this is a really long string of text',
    // comment_id: ''
  },
  {
    user_id: '3',
    title: 'Other thingies',
    body: 'this is a really long string of text',
    // comment_id: ''
  },
  {
    user_id: '4',
    title: 'out of ideas thingies',
    body: 'this is a really long string of text',
    // comment_id: ''
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;