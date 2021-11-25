const { Item } = require('../models/models');

exports.getItems = async () => {
  try {
    return await Item.findAll();
  } catch (error) {
    throw Error(error);
  }
};

exports.getOneItem = async (id) => {
  try {
    return await Item.findOne({ where: { id: [id] } });
  } catch (error) {
    throw Error(error);
  }
};

exports.createItem = async (name, description, price, price_margin, projectId) => {
  try {
    return Item.create({
      name, description, price, price_margin, projectId, statusId: 1,
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.updateItem = async (name, description, price, price_margin, id) => {
  try {
    return await Item.update({
      name, description, price, price_margin,
    }, { where: { id } });
  } catch (error) {
    throw Error(error);
  }
};

exports.deleteItem = async (id) => {
  try {
    return await Item.update({ statusId: 2 }, { where: { id } });
  } catch (error) {
    throw Error(error);
  }
};
