const Router = require('express');

const router = new Router();
const project = require('./projectRouter');
const item = require('./itemRouter');

router.use('/project', project);
router.use('/item', item);

module.exports = router;
