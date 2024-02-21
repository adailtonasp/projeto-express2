const dbConfig = require('../config/db.config');

const sequelize = require('sequelize');

const sequelizeDB = new sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})

const db = {};

db.sequelize = sequelize;

db.sequelizeDB = sequelizeDB;

db.pedidos = require('./pedido.models');

module.exports = db;

