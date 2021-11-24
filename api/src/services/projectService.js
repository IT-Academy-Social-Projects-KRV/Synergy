const {Project, Item} = require('../models/models')

exports.getSortedByName = async () => {
    try {
        return await Project.findAll({order: [['name', 'ASC']]});
    } catch (error) {
        throw Error(error)
    }

};

exports.createProject = async (name, description, date_start, date_finish, item) => {
    try {
        if (!item)
            return Project.create({name, description, date_start, date_finish, statusId: 1});
        else
            return Project.create({name, description, date_start, date_finish, statusId: 1,
                items: {name: item.name, description: item.description, price: item.price, price_margin: item.price_margin, statusId: 1}},
                {include: [Item]});
    } catch (error) {
        throw Error(error)
    }
};

exports.projectList = async () => {
    try {
        return await Project.findAll();
    } catch (error) {
        throw Error(error)
    }
};

exports.getOneProject = async (id) => {
    try {
        return await Project.findOne({where: {id: [id]}});
    } catch (error) {
        throw Error(error)
    }
}

exports.updateProject = async (name, description, date_start, date_finish, id) => {
    try {
        return await Project.update({name, description, date_start, date_finish}, {where: {id}});
    } catch (error) {
        throw Error(error)
    }
};

exports.deleteProject = async (id) => {
    try {
        return await Project.update({'statusId': 2}, {where: {id}})
    } catch (error) {
        throw Error(error)
    }
};