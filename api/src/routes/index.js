const Router = require('express');

const router = new Router();
const project = require('./projectRouter');
const item = require('./itemRouter');
const error404 = require('./error404Router');

router.use('/project', project);
router.use('/item', item);
router.use('/*', error404);

module.exports = router;
