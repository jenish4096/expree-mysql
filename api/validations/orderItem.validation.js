const Joi = require('joi');

module.exports = {

  // POST  create Order Items
  createOrderItem: Joi.object().keys({
    orderId: Joi.number().min(1).required().label('Order Id'),
    productId: Joi.number().min(1).required()
      .label('Product Id'),
    userId: Joi.number().min(1).required().label('Usert Id'),
    quantity: Joi.number().required().label('Quantity')
  })
};
