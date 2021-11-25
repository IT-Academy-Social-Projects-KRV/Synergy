const projectsService = require('../services/projectService');

exports.getOneProject = async (req, res) => {
  const { id } = req.params;
  const project = await projectsService.getOneProject(id);
  res.send(project);
};

exports.projectList = async (req, res) => {
  const projects = await projectsService.getSortedByName();
  res.status(200).json(projects);
};

exports.createProject = async (req, res) => {
  const {
    name, description, date_start, date_finish, items,
  } = req.body;
  const project = await projectsService.createProject(
    name,
    description,
    date_start,
    date_finish,
    items,
    );
  res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
  const {
    name, description, date_start, date_finish,
  } = req.body;
  const { id } = req.params;
  const project = await projectsService.updateProject(
    name,
    description,
    date_start,
    date_finish,
    id,
    );
  res.status(200).json(project);
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await projectsService.deleteProject(id);
  res.status(200).json('Succesfully deleted');
};
