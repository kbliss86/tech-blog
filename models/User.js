const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // set up method to run on instance data (per user) to check password - useing an alternattive method to validate passwords
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
// This is the model for the User table in the database
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true,
                len: [4],
            },
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;

