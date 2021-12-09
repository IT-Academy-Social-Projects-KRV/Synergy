const Router = require('express');

const router = new Router();
const {
    getComments, getOneComment, createComment, updateComment, deleteComment,
} = require('../controllers/commentController');

router.get('/', getComments);
router.get('/:id', getOneComment);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;
