const Sequelize = require('sequelize');
const path = require('path');

const connection = require('./connection');

let database1, database2;

database1 = new Sequelize(
  connection.development.database1.database,
  connection.development.database1.username,
  connection.development.database1.password, {
    host: connection.development.database1.host,
    dialect: connection.development.database1.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    storage: path.join(process.cwd(), 'db', 'database.sqlite'),
  },
);

database2 = new Sequelize(
  connection.development.database2.database,
  connection.development.database2.username,
  connection.development.database2.password, {
    host: connection.development.database2.host,
    dialect: connection.development.database2.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    storage: path.join(process.cwd(), 'db', 'database.sqlite'),
  },
);

module.exports = { database1, database2 };
