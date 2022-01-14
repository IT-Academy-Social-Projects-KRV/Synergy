import statusCode from 'http-status';
import projectsService from '../services/projectService';

const projectList = async (req, res) => {
    const {
        sortBy, sortDirection, page, size, name, capital, dateStart, dateFinish, userId,
    } = req.query;
    const projects = await projectsService.getProjects(sortBy, sortDirection, page, size, name, capital, dateStart, dateFinish, userId);
    res.status(statusCode.OK)
        .json(projects);
};

const getOneProject = async (req, res) => {
    const { id } = req.params;
    const project = await projectsService.getOneProject(id);
    res.status(statusCode.OK)
        .json(project);
};

const createProject = async (req, res) => {
    const {
        name, description, capital, dateStart, dateFinish, userId,
    } = req.body;
    const project = await projectsService.createProject(name, description, capital, dateStart, dateFinish, userId);
    res.status(statusCode.CREATED)
        .json(project);
};

const updateProject = async (req, res) => {
    const {
        name, description, capital, dateStart, dateFinish,
    } = req.body;
    const { id } = req.params;
    const project = await projectsService.updateProject(name, description, capital, dateStart, dateFinish, id);
    res.status(statusCode.OK)
        .json(project);
};

const deleteProject = async (req, res) => {
    const { id } = req.params;
    await projectsService.deleteProject(id);
    res.status(statusCode.OK)
        .json(`Project ${id} deleted`);
};

export {
  projectList,
  getOneProject,
  createProject,
  updateProject,
  deleteProject,
};
