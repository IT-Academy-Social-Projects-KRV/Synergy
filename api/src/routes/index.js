const Router = require('express');

const router = new Router();
const userRouter = require('./userRouter');
const projects = require('./projectRouter');
const items = require('./itemRouter');
const comments = require('./commentRouter');
const error404 = require('./error404Router');

router.use('/user', userRouter);
router.use('/projects', projects);
router.use('/items', items);
router.use('/comments', comments);
router.use('/*', error404);

module.exports = router;
