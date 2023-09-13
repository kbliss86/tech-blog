const bcrypt = require('bcrypt');
const { User } = require('../models');
//seed data for the user table
const userData = [
    {
        username: 'JohnDoe',
        password: bcrypt.hashSync('password12345', 10)
    },
    {
        username: 'JaneDoe',
        password: bcrypt.hashSync('password12345', 10)
    },
    {
        username: 'JimDoe',
        password: bcrypt.hashSync('password12345', 10)
    },
    {
        username: 'JillDoe',
        password: bcrypt.hashSync('password12345', 10)
    },
    {
        username: 'JackDoe',
        password: bcrypt.hashSync('password12345', 10)
    }
];

module.exports = () => User.bulkCreate(userData);
