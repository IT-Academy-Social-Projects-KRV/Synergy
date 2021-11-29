const Router = require('express');

const router = new Router();

const error404Controller = require('../controllers/error404Controller');

router.get('/', error404Controller.get404ErrorPage);

module.exports = router;
