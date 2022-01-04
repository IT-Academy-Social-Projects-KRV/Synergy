import { Item, Comment } from '../models/modelsAssociations';
import { statusesId } from '../constans/constants';

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
};

const createItem = async (name, description, price, priceMargin, projectId) => {
  try {
    const data = await Item.create({
      name,
      description,
      price,
      priceMargin,
      projectId,
      statusId: statusesId.NEW,
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const updateItem = async (
  name,
  description,
  price,
  priceMargin,
  statusId,
  id,
) => {
  try {
    const data = await Item.update(
      {
        name,
        description,
        price,
        priceMargin,
        statusId,
      },
      { where: { id } },
    );
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const deleteItem = async (id) => {
  try {
    const data = await Item.update(
      { statusId: statusesId.DELETED },
      { where: { id } },
    );
    return data;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
