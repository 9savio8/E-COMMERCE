const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const orders = sequelize.define('orders', {
    Ordersid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    TotalPrice:
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: true,
        defaultValue: 0.00
    },
    Products:
    {
        type: DataTypes.JSON,
        allowNull: true,
    },
    Usersid:
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
            model: 'users', 
            key: 'usersid', 
        }
    },
    Name:
    {
        type: DataTypes.STRING(255),
        allowNUll: true
    },
    Surname:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Address:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Cap:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    City:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Region:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Nation:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    Time:
    {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
},{
    tableName: 'orders',
    timestamps: false,  
    indexes: [
      {
        name: 'usersid_idx',
        fields: ['usersid']
      }
    ]
  })

  module.exports = orders