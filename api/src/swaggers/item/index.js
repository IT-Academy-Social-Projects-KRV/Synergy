import createItem from './createItem';
import getItems from './getItems';
import getItem from './getItem';
import updateItem from './updateItem';
import deleteItem from './deleteItem';

export default {
  '/api/items': {
    ...createItem,
    ...getItems,
  },
  '/api/items/{id}': {
    ...getItem,
    ...updateItem,
    ...deleteItem,
  },
};
