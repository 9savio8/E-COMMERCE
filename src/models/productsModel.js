const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const products = sequelize.define('products', {
    productsid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    name: 
    {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: 
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false
    },
    quantity: 
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    info: 
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    idcategory: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    freezeTablename: 'products',
    timestamps: false
})

module.exports = products