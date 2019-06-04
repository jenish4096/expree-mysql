const Joi = require('joi');
const Merchant = require('../models/Merchant');


const MerchantController = () => {
  const create = async (req, res) => {
    const { body } = req;
    try {
      const marchant = await Merchant.create({
        name: body.name
      });

      return res.status(200).json({ marchant });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const list = async (req, res) => {
    try {
      const marchant = await Merchant.findAll();

      return res.status(200).json({ marchant });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    create,
    list
  };
};

module.exports = MerchantController;
