require('dotenv').config

const{ Sequelize }= require('sequelize')
const config = require('./config')
const sequelize = new Sequelize('mysql://'+ process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.envDB_HOST + ':33060/E-COMMERCE')