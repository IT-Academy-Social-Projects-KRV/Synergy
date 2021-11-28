const status = require('http-status');
const projectsService = require('../services/projectService');

const projectList = async (req, res) => {
    const projects = await projectsService.getProjects(req);
    res.status(status.OK)
        .json(projects);
};

const getOneProject = async (req, res) => {
    const id = req.params.id;
    const project = await projectsService.getOneProject(id);
    res.send(project);
};

const createProject = async (req, res) => {
    const {
        name, description, capital, date_start, date_finish
    } = req.body;
    const project = await projectsService.createProject(name, description, capital, date_start, date_finish);
    res.status(status.CREATED)
        .json(project);
};

const updateProject = async (req, res) => {
    const {
        name, description, capital, date_start, date_finish
    } = req.body;
    const id = req.params.id;
    const project = await projectsService.updateProject(name, description, capital, date_start, date_finish, id);
    res.status(status.OK)
        .json(project);
};

const deleteProject = async (req, res) => {
    const id = req.params.id;
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
