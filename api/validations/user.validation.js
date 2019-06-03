const Joi = require('joi');

module.exports = {

  // POST  create users
  createUser: Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(6).max(128).required()
      .label('Password'),
    name: Joi.string().max(128).required().label('Name'),
    phone_number: Joi.number().required().label('Phone number')
  }),

  loginUser: Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(6).max(128).required()
      .label('Password')
  })
};
