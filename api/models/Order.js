const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'order';

const Order = database2.define('Order', {
  name: {
    type: Sequelize.STRING,
  }
}, { tableName });

module.exports = Order;
