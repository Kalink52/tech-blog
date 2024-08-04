const { Post } = require('../models');

const postData = [
  {
    user_id: 'Micah',
    // date: 'Cox',
    title: 'new tech thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: 'Caleb',
    // date: 'Cox',
    title: 'Fun thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: 'Jacob',
    // date: 'Cox',
    title: 'Other thingies',
    body: 'this is a really long string of text'
  },
  {
    user_id: 'David',
    // date: 'Cox',
    title: 'out of ideas thingies',
    body: 'this is a really long string of text'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;