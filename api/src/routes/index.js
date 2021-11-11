const Router = require('express');
const router = new Router();
const home = require('./home.router');

router.use('/home', home);

module.exports = router;
