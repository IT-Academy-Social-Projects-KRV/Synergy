const status = require('http-status');
const projectsService = require('../services/projectService');

const projectList = async (req, res) => {
    const {
        sortBy, sortDirection, page, size, name, capital, dateStart, dateFinish,
    } = req.query;
    const projects = await projectsService.getProjects(sortBy, sortDirection, page, size, name, capital, dateStart, dateFinish);
    res.status(status.OK)
        .json(projects);
};

const getOneProject = async (req, res) => {
    const { id } = req.params;
    const project = await projectsService.getOneProject(id);
    res.status(status.OK)
        .json(project);
};

const createProject = async (req, res) => {
    const {
        name, description, capital, dateStart, dateFinish, userId,
    } = req.body;
    const project = await projectsService.createProject(name, description, capital, dateStart, dateFinish, userId);
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
        .json(`Project ${id} deleted`);
};

module.exports = {
    projectList,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
}
