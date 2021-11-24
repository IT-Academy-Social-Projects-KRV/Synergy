const Router = require('express');
const router = new Router();
const home = require('./homeRouter');
const project = require('./projectRouter');
const item = require('./itemRouter');

router.use('/home', home);
router.use('/project', project);
router.use('/item', item);

module.exports = router;
