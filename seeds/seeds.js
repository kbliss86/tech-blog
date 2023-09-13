// Purpose: to seed the database with data
const sequelize = require('../config/connection');
const postData = require('./postData');
const userData = require('./userData');
const commentData = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await userData();

    await postData();

    await commentData();

    process.exit(0);
};

seedAll();