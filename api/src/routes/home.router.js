const Router = require('express');
const router = new Router();
const homeController = require('../controllers/home.controller');
router.get('/', homeController.home);
module.exports = router;
