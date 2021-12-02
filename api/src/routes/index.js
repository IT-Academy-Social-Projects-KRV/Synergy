const Router = require('express');

const router = new Router();
const projects = require('./projectRouter');
const items = require('./itemRouter');
const error404 = require('./error404Router');

router.use('/projects', projects);
router.use('/items', items);
router.use('/*', error404);

module.exports = router;
