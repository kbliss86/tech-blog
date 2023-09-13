const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }
// This is the model for the Post table in the database
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // This is the foreign key column that will be used to establish the relationship between this model and the user model
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                // This references the `user` model, which we set in `User.js` as its `modelName` property
                model: 'user',
                key: 'id',
                onDelete: 'CASCADE'
            }
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
