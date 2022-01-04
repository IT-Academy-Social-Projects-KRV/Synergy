import Router from 'express';
import {
    getComments, getOneComment, createComment, updateComment, deleteComment,
} from '../controllers/commentController';

const router = new Router();

router.get('/', getComments);
router.get('/:id', getOneComment);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;
