const express = require('express');

const router = express.Router();
const {
  getOneProject,
  projectList,
  updateProject,
  deleteProject,
  createProject,
} = require('../controllers/projectController');
const validateMiddleware = require('../middlewares/validate');
const { projectSchema } = require('../validations/schemas');

router.get('/', projectList);
router.get('/:id', validateMiddleware(projectSchema.id, 'params'), getOneProject);
router.post('/', validateMiddleware(projectSchema.createProject, 'body'), createProject);
router.patch(
  '/:id',
  validateMiddleware(projectSchema.id, 'params'),
  validateMiddleware(projectSchema.updateProject, 'body'),
  updateProject,
);
router.delete('/:id', validateMiddleware(projectSchema.id, 'params'), deleteProject);

module.exports = router;
