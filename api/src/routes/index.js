const Router = require('express');

const router = new Router();
const projects = require('./projectRouter');
const items = require('./itemRouter');

router.use('/projects', projects);
router.use('/items', items);

module.exports = router;
