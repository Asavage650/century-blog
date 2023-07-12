const { User } = require('../models');
const userData = [
  {
    username: 'alexiussavage',
    password: 'test1',
  },
  {
    username: 'lexussav',
    password: 'test2',
  },
  {
    username: 'test3',
    password: 'test3',
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
