import statusCode from 'http-status';
import itemService from '../services/itemService';

const getItems = async (req, res) => {
    const items = await itemService.getItems();
    res.status(statusCode.OK)
        .json(items);
}

const getOneItem = async (req, res) => {
    const { id } = req.params;
    const item = await itemService.getOneItem(id);
    res.status(statusCode.OK)
        .json(item);
};

const createItem = async (req, res) => {
    const {
        name, description, price, priceMargin, projectId,
    } = req.body;
    const item = await itemService.createItem(name, description, price, priceMargin, projectId);
    res.status(statusCode.CREATED)
        .json(item);
};

const updateItem = async (req, res) => {
  const {
 name, description, price, priceMargin, itemStatus,
} = req.body;
    const { id } = req.params;
    const item = await itemService.updateItem(name, description, price, priceMargin, itemStatus, id);
    res.status(statusCode.OK)
        .json(item);
};

const deleteItem = async (req, res) => {
    const { id } = req.params;
    await itemService.deleteItem(id);
    res.status(statusCode.OK)
        .json(`Item ${id} deleted`);
};

export {
  getItems,
  getOneItem,
  createItem,
  updateItem,
  deleteItem,
};
