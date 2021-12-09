const Router = require('express');

const passport = require('passport');
require('../../config/passport')(passport);

const router = new Router();
const userController = require('../controllers/userController');

router.post('/login', userController.loginUser);
router.get('/protected', passport.authenticate('jwt', { session: false }), userController.auth);

module.exports = router;
