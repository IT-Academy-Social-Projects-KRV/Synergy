import Router from 'express';
import {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController';
//import validateMiddleware from '../middlewares/validate';
//import { itemSchema } from '../validations/schemas';

const router = new Router();

router.get('/', getItems);
router.get('/:id', getOneItem);/*validateMiddleware(itemSchema.itemId,  'params')*/
router.post('/', createItem); /* validateMiddleware(itemSchema.createItem, 'body'),  */
router.patch('/:id', updateItem);

/* validateMiddleware(itemSchema.itemId, 'params'),
validateMiddleware(itemSchema.editItem, 'body'), */
router.delete('/:id', deleteItem); /* validateMiddleware(itemSchema.itemId, 'params'),  */

export default router;
