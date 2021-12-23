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
const schemas = require('../validations/schemas');

router.get('/', getItems);
router.get('/:id', validateMiddleware(schemas.getItem, 'params'), getOneItem);
router.post('/', validateMiddleware(schemas.postItem, 'body'), createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
