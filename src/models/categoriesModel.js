const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const categories = sequelize.define('categories', {
    categoriesid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, 
{
    freezeTableName: true,
    timestamps: false
})

module.exports = categories