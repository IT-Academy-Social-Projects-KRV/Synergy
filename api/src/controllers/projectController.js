// exports.create = (req, res) => {
//   res.send('NOT IMPLEMENTED: Project create');
// };

exports.getOneProject = (req, res) => {
  res.send('NOT IMPLEMENTED: getOneProject');
};

exports.projectList = (req, res) => {
  //here i get query from client like ?name=monobank&.... but now we stop only on name
  let { name } = req.query;
  //here i import ur func and i expect array of res
  res.status(200).json('here might be arr');
};
exports.createProject = (req, res) => {
  const { name, desc, status } = req.body;
  res.status(201).json('Access create');
};

exports.updateProject = (req, res) => {
  const { name, desc, status } = req.body;
  const id = req.params.id;

  res.status(200).json('Access update');
};

exports.deleteProject = (req, res) => {
  const id = req.params.id;
  res.status(200).json('Project is disabled now');
};
