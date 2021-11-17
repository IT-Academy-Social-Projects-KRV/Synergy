const Router = require('express');
const router = new Router();
const home = require('./homeRouter');
const project = require('./projectRouter');

router.use('/home', home);
router.use('/project', project);

module.exports = router;
