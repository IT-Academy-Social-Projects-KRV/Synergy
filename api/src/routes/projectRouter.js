const express = require('express');

const router = express.Router();
const {
  getOneProject,
  projectList,
  updateProject,
  deleteProject,
  createProject,
} = require('../controllers/projectController');

router.get('/:id', getOneProject);
router.get('/', projectList);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.patch('/delete/:id', deleteProject);

module.exports = router;
