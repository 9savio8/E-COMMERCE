const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const products = sequelize.define('products', {
    Productsid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    Name: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Price: 
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false
    },
    Quantity: 
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    info: 
    {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    
},
{
    freezeTablename: 'products',
    timestamps: false
})

module.exports = products