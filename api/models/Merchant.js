const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'merchant';

const Merchant = database2.define('Merchant', {
  name: {
    type: Sequelize.STRING,
  }
}, { tableName });

module.exports = Merchant;
