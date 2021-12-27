const Router = require('express');

const router = new Router();
const {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');
const validateMiddleware = require('../middlewares/validate');
const { itemSchema } = require('../validations/schemas');

router.get('/', getItems);
router.get('/:id', validateMiddleware(itemSchema.itemId, 'params'), getOneItem);
router.post('/', validateMiddleware(itemSchema.createItem, 'body'), createItem);
router.patch(
  '/:id',
  validateMiddleware(itemSchema.itemId, 'params'),
  validateMiddleware(itemSchema.editItem, 'body'),
  updateItem,
);
router.delete('/:id', validateMiddleware(itemSchema.itemId, 'params'), deleteItem);

module.exports = router;
