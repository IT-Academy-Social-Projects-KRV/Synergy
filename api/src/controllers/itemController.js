const status = require('http-status');
const itemService = require('../services/itemService');

const getItems = async (req, res) => {
    const items = await itemService.getItems();
    res.send(items);
}

const getOneItem = async (req, res) => {
    const id = req.params.id;
    const item = await itemService.getOneItem(id);
    res.send(item);
};

const createItem = async (req, res) => {
    const { name, description, price, price_margin, projectId } = req.body;
    const item = await itemService.createItem(name, description, price, price_margin, projectId);
    res.status(status.CREATED)
        .json(item);
};

const updateItem = async (req, res) => {
    const { name, description, price, price_margin, statusId } = req.body;
    const id = req.params.id;
    const item = await itemService.updateItem(name, description, price, price_margin, statusId, id);
    res.status(status.OK)
        .json(item);
};

const deleteItem = async (req, res) => {
    const id = req.params.id;
    await itemService.deleteItem(id);
    res.status(status.OK)
        .json('Item ' + id + ' deleted');
};

module.exports = {
    getItems,
    getOneItem,
    createItem,
    updateItem,
    deleteItem,
}
