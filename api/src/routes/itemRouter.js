const Router = require('express');

const router = new Router();
const {
  getItems, getOneItem, createItem, updateItem, deleteItem,
} = require('../controllers/itemController');

router.get('/', getItems);
router.get('/:id', getOneItem);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
