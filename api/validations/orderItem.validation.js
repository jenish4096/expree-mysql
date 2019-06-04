const Joi = require('joi');

module.exports = {

  // POST  create Order Items
  createOrderItem: Joi.object().keys({
    productId: Joi.number().min(1).required()
      .label('Product Id'),
    description: Joi.string().required(),
    userId: Joi.number().min(1).required().label('Usert Id'),
    quantity: Joi.number().required().label('Quantity')
  })
};
