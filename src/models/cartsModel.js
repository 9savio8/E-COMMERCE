const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const carts = sequelize.define('carts', {
    cartsid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalPrice:
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false,
        defaultValue: 0.00
    },
    usersid: 
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'usersid'
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

module.exports = carts;