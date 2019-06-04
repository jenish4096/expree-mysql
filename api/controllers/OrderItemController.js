const Joi = require('joi');
const OrderItem = require('../models/OrderItem');
const { createOrderItem } = require('../validations/orderItem.validation');

const orderItemFormatter = require('../formatter/orderItem');

//Models
const Product = require('../models/Product');

const OrderItemController = () => {
  const create = async (req, res) => {
    Joi.validate(req.body, createOrderItem).then(async () => {

      const { body } = req;

      try {
        const orderItem = await OrderItem.create({
          orderId: body.orderId,
          description:body.description,
          productId: body.productId,
          userId: body.userId,
          quantity: body.quantity
        });

        return res.status(200).json({ orderItem });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }

    }).catch(err => res.status(400).json({ msg: err.details[0].message.replace(/["']/g, '') }))
  };

  const list = async (req, res) => {
    try {
      let orderItems = await OrderItem.findAll({
        include: [{
          model: Product,
          attributes: ['id', 'name']
        }]
      });
      orderItems = await orderItemFormatter.formateOrderItems(orderItems)
      return res.status(200).json({ orderItems });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      let orderItems = await OrderItem.findAll({
        include: [{
          model: Product,
          attributes: ['id', 'name']
        }],
        where: { userId: req.token.id }
      });

      orderItems = await orderItemFormatter.formateOrderItems(orderItems)
      return res.status(200).json({ orderItems });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    create,
    list,
    get
  };
};


module.exports = OrderItemController;
