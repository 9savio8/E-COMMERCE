const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const users = sequelize.define('users', {
    usersid : 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    userName: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    role: 

    {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'common'
    }
},{
    freezeTablename: 'users',
    timestamps: false
})

module.exports = users;