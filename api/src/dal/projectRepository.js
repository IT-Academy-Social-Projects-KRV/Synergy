import { statusesId } from '../constans/constants';
import {
 Project, Item, User,
} from '../models/modelsAssociations';

const getProjects = async (sortData, page, size, filters) => {
  try {
    const data = await Project.findAndCountAll(
      {
        limit: size,
        offset: size * (page - 1),
        where: filters,
        order: [sortData],
        include: [{
          model: User,
          attributes: ['firstName', 'lastName', 'email'],
        },
          Item,
        ],
        distinct: true,
      },
    );
    return data;
  } catch (err) {
    throw Error(err);
  }
}

const createProject = async (name, description, capital, dateStart, dateFinish, userId) => {
  try {
    const data = await Project.create({
      name,
      description,
      capital,
      dateStart,
      dateFinish,
      statusId: statusesId.NEW,
      userId,
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
}

const getProject = async (id) => {
  try {
    const data = await Project.findOne({
      where: { id },
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'email'],
      },
        Item,
      ],
    });
    return data;
  } catch (err) {
    throw Error(err);
  }
}

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

export default {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
