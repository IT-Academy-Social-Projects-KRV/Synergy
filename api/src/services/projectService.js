const { model } = require('../../db');
const db = require('../../db');
const models = require('../models/models')

exports.getSortedByName = async () => {
    try {
        return await models.Project.findAll({order: [['name', 'ASC']]});
    } catch (error) {
        throw Error(error)
    }
    
};

exports.createProject = async (name, description, date_start, date_finish) => {
    try {   
        return models.Project.create({name, description, date_start, date_finish});
    } catch (error) {
        throw Error(error) 
    }
};

exports.projectList = async() => {
    try {
        return await models.Project.findAll();
    } catch (error) {
        throw Error(error)
    }      
};

exports.getOneProject = async(id) => {
    try {
        return await models.Project.findOne({where: {id: [id]}});
    } catch (error) {
        throw Error(error)
    }
}

exports.updateProject = async(name, description, date_start, date_finish, id) => {
    try {
        return await models.Project.update({ name, description, date_start, date_finish}, {where: {id}});
    } catch (error) {
        throw Error(error)
    }
};

exports.deleteProject = async(id) => {
    try {
       return await models.Project.destroy({where: {id}})
    } catch (error) {
        throw Error(error)
    }
};