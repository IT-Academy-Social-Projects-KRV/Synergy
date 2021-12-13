const createItem = require('./createItem');
const getItems = require('./getItems');
const getItem = require('./getItem');
const updateItem = require('./updateItem');
const deleteItem = require('./deleteItem');

module.exports = {
  // paths: {
  '/api/items': {
    ...createItem,
    ...getItems,
  },
  '/api/items/{id}': {
    ...getItem,
    ...updateItem,
    ...deleteItem,
  },
  // },
};
