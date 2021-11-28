const Router = require('express');

const router = new Router();
const userRouter = require('./userRouter');
const project = require('./projectRouter');
const item = require('./itemRouter');
const error404 = require('./error404Router');

router.use('/user', userRouter);
router.use('/project', project);
router.use('/item', item);
router.use('/*', error404);

module.exports = router;
