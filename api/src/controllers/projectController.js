const projectsService = require('../services/projectService');

const getOneProject = async (req, res) => {
  const id = req.params.id;
  const project = await projectsService.getOneProject(id);
  res.send(project);
};

const projectList = async (req, res) => {
  let { name } = req.query;
  //if(name) getSortedByName(name)
  //else getProjects()
  const projects = await projectsService.getSortedByName();
  res.status(200).json(projects);
};

const createProject = async (req, res) => {
  const { name, description, date_start, date_finish, items } = req.body;
  const project = await projectsService.createProject(
    name,
    description,
    date_start,
    date_finish,
    items
  );
  res.status(201).json(project);
};
const updateProject = async (req, res) => {
  const { name, description, date_start, date_finish } = req.body;
  const id = req.params.id;
  const project = await projectsService.updateProject(
    name,
    description,
    date_start,
    date_finish,
    id
  );
  res.status(200).json(project);
};

const deleteProject = async (req, res) => {
  const id = req.params.id;
  await projectsService.deleteProject(id);
  res.status(200).json('Succesfully deleted');
};

module.exports = {
  getOneProject,
  projectList,
  createProject,
  updateProject,
  deleteProject,
};
