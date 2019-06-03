const Sequelize = require('sequelize');

const { database2 } = require('../../config/database');

const tableName = 'posts';

const Post = database2.define('Post', {
  to: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  }
}, { tableName });


module.exports = Post;
