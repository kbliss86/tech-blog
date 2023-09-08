const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // This is the foreign key column that will be used to establish the relationship between this model and the post model
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                // This references the `post` model, which we set in `Post.js` as its `modelName` property
                model: 'post',
                key: 'id',
                onDelete: 'CASCADE'
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
        modelName: 'comment'
    }
);

module.exports = Comment;

