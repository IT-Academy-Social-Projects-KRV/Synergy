const { Op } = require('sequelize');
const { Project, Item, User } = require('../models/models');
const { statusesId } = require('../constans/constants');

const getProjects = async (
  sortData,
  page,
  size,
  capitalData,
  name,
  dateStart,
  dateFinish,
) => {
  try {
    const data = await Project.findAndCountAll({
      limit: size,
      offset: size * (page - 1),
      where: {
        name: {
          [Op.substring]: [name || null],
        },
        capital: {
          [Op.between]: capitalData,
        },
        dateStart: {
          [Op.gt]: dateStart || '1970-01-01',
        },
        dateFinish: {
          [Op.lt]: dateFinish || '2038-01-19',
        },
        statusId: {
          [Op.ne]: statusesId.DELETED,
        },
      },
      order: [sortData],
      include: [
        { model: User, attributes: ['firstName', 'lastName', 'email'] },
        Item,
      ],
      distinct: true,
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const createProject = async (
  name,
  description,
  capital,
  dateStart,
  dateFinish,
) => {
  try {
    const data = await Project.create({
      name,
      description,
      capital,
      dateStart,
      dateFinish,
      statusId: statusesId.NEW,
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const getProject = async (id) => {
  try {
    const data = await Project.findOne({
      where: { id },
      include: [
        { model: User, attributes: ['firstName', 'lastName', 'email'] },
        Item,
      ],
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const updateProject = async (
  name,
  description,
  capital,
  dateStart,
  dateFinish,
  id,
) => {
  try {
    const data = await Project.update(
      {
        name,
        description,
        capital,
        dateStart,
        dateFinish,
      },
      { where: { id } },
    );
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const deleteProject = async (id) => {
  try {
    const data = await Project.update(
      { statusId: statusesId.DELETED },
      { where: { id } },
    );
    return data;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
