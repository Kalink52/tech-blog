const { Post } = require('../models');

const postData = [
  {
    user_id: '1',
    // date: 'Cox',
    title: 'new tech thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: '2',
    // date: 'Cox',
    title: 'Fun thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: '3',
    // date: 'Cox',
    title: 'Other thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: '4',
    // date: 'Cox',
    title: 'out of ideas thingies',
    body: 'this is a really long string of text'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;