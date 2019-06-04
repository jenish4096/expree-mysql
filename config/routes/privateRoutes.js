const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /oder_item': 'OrderItemController.create',
  'GET /oder_items': 'OrderItemController.list',
  'GET /oder': 'OrderItemController.get',
  'POST /merchant': 'MerchantController.create',
  'get /merchant': 'MerchantController.list',


}
module.exports = privateRoutes;
