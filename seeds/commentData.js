const { Comment } = require('../models');
//seed data for the comment table
const commentData = [
    {
        comment_text: 'This is a great post!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'This is a great post!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'This is a great post!',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'This is a great post!',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'This is a great post!',
        user_id: 5,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;