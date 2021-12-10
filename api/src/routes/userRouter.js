const Router = require('express');

const passport = require('passport');
require('../../config/passport')(passport);

const router = new Router();
const {
    loginUser,
    auth,
} = require('../controllers/userController');

router.post('/login', loginUser);
router.get('/protected', passport.authenticate('jwt', { session: false }), auth);

module.exports = router;
