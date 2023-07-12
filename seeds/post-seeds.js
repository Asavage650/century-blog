const { Post } = require('../models');
const postData = [
  {
    title: 'REACT',
    content: 'I love using REACT for my websites',
    user_id: 1,
  },
  {
    title: 'ORM Mapping',
    content: 'I love learning about ORM mapping for my websites',
    user_id: 2,
  },
  {
    title: 'Handlebars',
    content:
      'Handlebars is a useful package to help render html without doing as much work.',
    user_id: 3,
  },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
