const status = require('http-status');
const projectsService = require('../services/projectService');

const projectList = async (req, res) => {
    const {
        sort, page, size, capital, name, dateStart, dateFinish,
    } = req.query;
    const projects = await projectsService.getProjects(sort, page, size, capital, name, dateStart, dateFinish);
    res.status(status.OK)
        .json(projects);
};

const getOneProject = async (req, res) => {
    const { id } = req.params;
    const project = await projectsService.getOneProject(id);
    res.send(project);
};

const createProject = async (req, res) => {
    const {
        name, description, capital, dateStart, dateFinish,
    } = req.body;
    const project = await projectsService.createProject(name, description, capital, dateStart, dateFinish);
    res.status(status.CREATED)
        .json(project);
};

const updateProject = async (req, res) => {
    const {
        name, description, capital, dateStart, dateFinish,
    } = req.body;
    const { id } = req.params;
    const project = await projectsService.updateProject(name, description, capital, dateStart, dateFinish, id);
    res.status(status.OK)
        .json(project);
};

const deleteProject = async (req, res) => {
    const { id } = req.params;
    await projectsService.deleteProject(id);
    res.status(status.OK)
        .json('Succesfully deleted');
};

module.exports = {
    projectList,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
}
