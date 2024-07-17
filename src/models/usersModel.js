const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const users = sequelize.define('users', {
    Userid : 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    UserName: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Email: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Password: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Role:
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