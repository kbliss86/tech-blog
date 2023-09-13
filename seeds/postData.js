const { Post } = require('../models');
//seed data for the post table
const postData = [
    {
        post_title: 'Why MVC is Essential for Web Development',
        post_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user_id: 1
    },
    {
        post_title: 'Authentication vs. Authorization',
        post_text: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 2
    },
    {
        post_title: 'Object-Relational Mapping',
        post_text: 'I have really loved learning about ORMs. It is really simplified the way I create queries in SQL!',
        user_id: 3
    },
    {
        post_title: 'Handlebars',
        post_text: 'Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.',
        user_id: 4
    },
    {
        post_title: 'Handlebars Partials',
        post_text: 'Partials are another feature provided by Handlebars. Partials are basically just like functions, they make large websites easier to maintain as you don’t have to go and change a piece of text in every page it appears in.',
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;