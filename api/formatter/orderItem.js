const ObjectFormatter = require('object-formatter').default;
const User = require('../models/User');

let orderItemsSchema = {
  id: '@id',
  description: "@description",
  user: '@user',
  quantity: '@quantity',
  createdAt: "@createdAt",
  updatedAt: "@updatedAt",
  product: '@Product'
}

exports.formateOrderItems = async (orderItems) => {
  let order = [];
  for (let orderItem of orderItems) {
    orderItemsSchema = Object.assign({}, orderItemsSchema);
    const objFormatter = new ObjectFormatter();
    let orderItemObj = objFormatter.format(orderItemsSchema, JSON.parse(JSON.stringify(orderItem)));
    orderItemObj.user = await getUser(orderItem.userId);
    order.push(orderItemObj)
  }
  return order;
}

async function getUser(id) {
  let user = await User.findOne({ where: { id: id } });
  return (JSON.parse(JSON.stringify(user)))
}