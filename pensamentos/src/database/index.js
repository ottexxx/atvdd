

const sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const connection = new sequelize(databaseConfig);

module.exports = connection;

