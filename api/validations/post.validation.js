const Joi = require('joi');

module.exports = {

  // POST  create users
  createPost: Joi.object().keys({
    to: Joi.string().max(128).required().label('To'),
    post: Joi.string().max(128).required().label('Post')
  }),
};
