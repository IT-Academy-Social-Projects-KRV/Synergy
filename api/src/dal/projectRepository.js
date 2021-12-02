const { Op } = require('sequelize');
const { Project, Item } = require('../models/models');

const getProjects = async (sortData, page, size, capitalData, name, date_start, date_finish) => {
    try {
        const data = await Project.findAndCountAll(
            {
                limit: size,
                offset: size * (page - 1),
                where: {
                    name: {
                        [Op.substring]: [name || null],
                    },
                    capital: {
                        [Op.between]: capitalData,
                    },
                    date_start: {
                        [Op.gt]: date_start || '1970-01-01',
                    },
                    date_finish: {
                        [Op.lt]: date_finish || '2038-01-19',
                    },
                },
                order: [sortData],
                include: Item,
                distinct: true,
            },
        );
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const createProject = async (name, description, capital, date_start, date_finish) => {
    try {
        const data = Project.create({
            name,
            description,
            capital,
            date_start,
            date_finish,
            statusId: 1,
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
            include: Item,
        });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const updateProject = async (name, description, capital, date_start, date_finish, id) => {
    try {
        const data = Project.update({
            name,
            description,
            capital,
            date_start,
            date_finish,
        }, { where: { id } });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const deleteProject = async (id) => {
    try {
        const data = Project.update({ statusId: 2 }, { where: { id } });
        return data;
    } catch (err) {
        throw Error(err);
    }
}

module.exports = {
    getProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject,
}
