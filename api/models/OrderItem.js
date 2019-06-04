const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'order_item';
const Product = require('./Product');

const OrderItem = database2.define('OrderItem', {
  productId: {
    type: Sequelize.INTEGER,
    references: { model: 'product', key: 'id' },
  },
  description: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  }
}, { tableName });

OrderItem.belongsTo(Product, { foreignKey: 'productId' });

module.exports = OrderItem;
