import express from 'express';
import {
  getOneProject,
  projectList,
  updateProject,
  deleteProject,
  createProject,
} from '../controllers/projectController';
import validateMiddleware from '../middlewares/validate';
import { projectSchema } from '../validations/schemas';

const router = express.Router();

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

export default router;
