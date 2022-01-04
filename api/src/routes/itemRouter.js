import Router from 'express';
import {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController';
import validateMiddleware from '../middlewares/validate';
import { itemSchema } from '../validations/schemas';

const router = new Router();

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

export default router;
