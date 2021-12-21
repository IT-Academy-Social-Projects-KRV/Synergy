const Router = require('express');
const statusCode = require('http-status');

const router = new Router();
const userRouter = require('./userRouter');
const projects = require('./projectRouter');
const items = require('./itemRouter');
const comments = require('./commentRouter');
const settings = require('./settingsRouter');

router.use('/users', userRouter);
router.use('/projects', projects);
router.use('/items', items);
router.use('/comments', comments);
router.use('/settings', settings);
router.use('/*', (req, res) => {
    res.status(statusCode.NOT_FOUND).send('Page not found');
});

module.exports = router;
