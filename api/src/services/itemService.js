const { Item } = require('../models/models');

const getItems = async () => {
  try {
    return await Item.findAll();
  } catch (error) {
    throw Error(error);
  }
};

const getOneItem = async (id) => {
  try {
    return await Item.findOne({ where: { id: [id] } });
  } catch (error) {
    throw Error(error);
  }
};

const createItem = async (
  name,
  description,
  price,
  price_margin,
  projectId
) => {
  try {
    return Item.create({
      name,
      description,
      price,
      price_margin,
      projectId: projectId,
      statusId: 1,
    });
  } catch (error) {
    throw Error(error);
  }
};

const updateItem = async (name, description, price, price_margin, id) => {
  try {
    return await Item.update(
      { name, description, price, price_margin },
      { where: { id } }
    );
  } catch (error) {
    throw Error(error);
  }
};

const deleteItem = async (id) => {
  try {
    return await Item.update({ statusId: 2 }, { where: { id } });
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
};
