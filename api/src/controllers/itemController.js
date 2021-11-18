const itemService = require('../services/itemService')

exports.getItems = async (req, res) => {
    const items = await itemService.getItems()
    res.send(items)
}

exports.getOneItem = async (req, res) => {
    const id = req.params.id;
    const item = await itemService.getOneItem(id)
    res.send(item);
};

exports.createItem = async (req, res) => {
    const { name, description, price, price_margin, projectId } = req.body;
    const item = await itemService.createItem(name, description, price, price_margin, projectId)
    res.status(201).json(item);
};

exports.updateItem = async (req, res) => {
    const { name, description, price, price_margin } = req.body;
    const id = req.params.id;
    const item = await itemService.updateItem(name, description, price, price_margin, id)
    res.status(200).json(item);
};

exports.deleteItem = async (req, res) => {
    const id = req.params.id;
    await itemService.deleteItem(id)
    res.status(200).json('Item ' + id + ' deleted');
};

