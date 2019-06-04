const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'product';
const OrderItem = require('./OrderItem');

const Product = database2.define('Product', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
  },
  merchantId: {
    type: Sequelize.INTEGER,
    references: { model: 'merchant', key: 'id' },
  }
}, { tableName });

module.exports = Product;
