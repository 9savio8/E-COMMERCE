const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const orders = sequelize.define('orders', {
    ordersid: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    totalPrice:
    {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: true,
        defaultValue: 0.00
    },
    products:
    {
        type: DataTypes.JSON,
        allowNull: true,
    },
    usersid:
    {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
            model: 'users', 
            key: 'usersid', 
        }
    },
    name:
    {
        type: DataTypes.STRING(255),
        allowNUll: true
    },
    surname:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    address:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cap:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    region:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    nation:
    {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    time:
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