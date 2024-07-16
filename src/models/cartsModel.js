const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const products = require('./productsModel')
const users = require('./usersModel')

const carts = sequelize.define('carts', {
    Cartsid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    TotalPrice:
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false,
        defaultValue: 0.00
    },
    Usersid: 
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'Userid'
        }

    },
    products: 
    {
        type: DataTypes.JSON,
        allowNull: true
    }
},{
    tableName: 'carts', 
    timestamps: false,
})