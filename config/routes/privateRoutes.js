const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /oder_item': 'OrderItemController.create',
  'GET /oder_items': 'OrderItemController.list'
}
module.exports = privateRoutes;
