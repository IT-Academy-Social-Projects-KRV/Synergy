const Router = require('express');
const router = new Router();
const home = require('./home.router');
const project = require('./project.router');

router.use('/home', home);
router.use('/project', project);

module.exports = router;
