const Router = require('express');
const router = new Router();
const { home } = require('../controllers/homeController');
router.get('/', home);
module.exports = router;
