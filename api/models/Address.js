const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'address';

const Address = database2.define('Address', {
  address: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
  }
}, { tableName });

module.exports = Address;
