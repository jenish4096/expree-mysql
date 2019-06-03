const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'order_item';

const OrderItem = database2.define('OrderItem', {
  orderId: {
    type: Sequelize.INTEGER,
  },
  productId: {
    type: Sequelize.INTEGER,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  }
}, { tableName });

module.exports = OrderItem;
