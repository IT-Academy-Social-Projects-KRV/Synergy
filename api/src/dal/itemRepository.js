const { Item, Comment } = require('../models/models');

const getItems = async () => {
    try {
        const data = await Item.findAll({
            include: Comment,
            order: [['id', 'ASC']],
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
};

const getItem = async (id) => {
    try {
        const data = await Item.findOne({
            where: { id },
            include: Comment,
            order: [[Comment, 'id', 'ASC']],
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const createItem = async (name, description, price, price_margin, projectId) => {
    try {
        const data = await Item.create({
            name,
            description,
            price,
            price_margin,
            projectId,
            statusId: 1,
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const updateItem = async (name, description, price, price_margin, statusId, id) => {
    try {
        const data = await Item.update({
            name,
            description,
            price,
            price_margin,
            statusId,
        }, { where: { id } });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const deleteItem = async (id) => {
    try {
        const data = await Item.update({ statusId: 2 }, { where: { id } });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
}
