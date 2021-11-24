const { Project, Item } = require('../models/models');

const getSortedByName = async () => {
  try {
    return await Project.findAll({ order: [['name', 'ASC']] });
  } catch (error) {
    throw Error(error);
  }
};

const createProject = async (
  name,
  description,
  date_start,
  date_finish,
  item
) => {
  try {
    if (!item)
      return Project.create({
        name,
        description,
        date_start,
        date_finish,
        statusId: 1,
      });
    else
      return Project.create(
        {
          name,
          description,
          date_start,
          date_finish,
          statusId: 1,
          items: {
            name: item.name,
            description: item.description,
            price: item.price,
            price_margin: item.price_margin,
            statusId: 1,
          },
        },
        { include: [Item] }
      );
  } catch (error) {
    throw Error(error);
  }
};

const projectList = async () => {
  try {
    return await Project.findAll();
  } catch (error) {
    throw Error(error);
  }
};

const getOneProject = async (id) => {
  try {
    return await Project.findOne({ where: { id: [id] } });
  } catch (error) {
    throw Error(error);
  }
};

const updateProject = async (
  name,
  description,
  date_start,
  date_finish,
  id
) => {
  try {
    return await Project.update(
      { name, description, date_start, date_finish },
      { where: { id } }
    );
  } catch (error) {
    throw Error(error);
  }
};

const deleteProject = async (id) => {
  try {
    return await Project.update({ statusId: 2 }, { where: { id } });
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getSortedByName,
  createProject,
  projectList,
  getOneProject,
  updateProject,
  deleteProject,
};
