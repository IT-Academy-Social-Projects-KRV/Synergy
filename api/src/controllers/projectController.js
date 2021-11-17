exports.getOneProject = (req, res) => {
  const id = req.params.id;
  res.send('NOT IMPLEMENTED: getOneProject');
};

exports.projectList = (req, res) => {
  let { name } = req.query;
  //if(name) getSortedByName(name)
  //else getProjects()
  res.status(200).json('here might be arr');
};
exports.createProject = (req, res) => {
  const { name, description, date_start, date_finish } = req.body;
  res.status(201).json('Access create');
};

exports.updateProject = (req, res) => {
  const { name, description, date_start, date_finish } = req.body;
  const id = req.params.id;

  res.status(200).json('Access update');
};

exports.deleteProject = (req, res) => {
  const id = req.params.id;
  res.status(200).json('Project is disabled now');
};
