const { Comment } = require('../models');
const commentData = [
  {
    commentText: 'Siick',
    user_id: 1,
    post_id: 1,
  },
  {
    commentText: 'Wow that is cool to know.',
    user_id: 2,
    post_id: 2,
  },
  {
    commentText: 'Tech looks fun',
    user_id: 3,
    post_id: 3,
  },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
