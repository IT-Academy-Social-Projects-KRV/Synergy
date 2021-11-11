const Router = require('express');
const router = new Router();
const home = require('./home.router');
const project = require('./project.router');
const singleProject = require('./singleProject.router');

router.use('/home', home);
router.use('/project', project);
router.use('/single/project', singleProject);

module.exports = router;
