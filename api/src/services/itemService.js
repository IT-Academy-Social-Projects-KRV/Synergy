const itemRepository = require('../dal/itemRepository');

const getItems = async () => {
    const databaseResult = await itemRepository.getItems();
    return databaseResult;
};

const getOneItem = async (id) => {
    const databaseResult = await itemRepository.getItem(id);
    return databaseResult;
}

const createItem = async (name, description, price, price_margin, projectId) => {
    const databaseResult = await itemRepository.createItem(name, description, price, price_margin, projectId);
    return databaseResult;
};

const updateItem = async (name, description, price, price_margin, itemStatus, id) => {
    const changeItemStatus = {
        Approved: 7,
        Rejected: 8,
    }
    const databaseResult = await itemRepository.updateItem(name, description, price, price_margin, changeItemStatus[itemStatus], id);
    return databaseResult;
};

const deleteItem = async (id) => {
    const databaseResult = await itemRepository.deleteItem(id);
    return databaseResult;
};

module.exports = {
    getItems,
    getOneItem,
    createItem,
    updateItem,
    deleteItem,
}
