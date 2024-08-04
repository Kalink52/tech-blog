const { User } = require('../models');

const userData = [
    {
    username: 'test',
    password: 'password'
    },
    {
    username: 'Kali',
    password: 'password'
    },
    {
    username: 'WWF',
    password: 'password'
    },
    {
    username: 'HBC',
    password: 'password'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;