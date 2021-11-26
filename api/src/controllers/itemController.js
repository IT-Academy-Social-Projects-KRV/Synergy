const itemService = require('../services/itemService');

const getItems = async (req, res) => {
  const items = await itemService.getItems();
  res.send(items);
};

const getOneItem = async (req, res) => {
  const { id } = req.params;
  const item = await itemService.getOneItem(id);
  res.send(item);
};

const createItem = async (req, res) => {
  const {
 name, description, price, price_margin, projectId,
} = req.body;
  const item = await itemService.createItem(
    name,
    description,
    price,
    price_margin,
    projectId,
  );
  res.status(201).json(item);
};

const updateItem = async (req, res) => {
  const {
 name, description, price, price_margin,
} = req.body;
  const { id } = req.params;
  const item = await itemService.updateItem(
    name,
    description,
    price,
    price_margin,
    id,
  );
  res.status(200).json(item);
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await itemService.deleteItem(id);
  res.status(200).json(`Item ${id} deleted`);
};

module.exports = {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
};
