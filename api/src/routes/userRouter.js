const Router = require('express');

const passport = require('passport');
require('../../config/passport')(passport);

const router = new Router();
const {
    userList,
    registerUser,
    loginUser,
    auth,
} = require('../controllers/userController');
const validateMiddleware = require('../middlewares/validate');
const { userSchema } = require('../validations/schemas');

router.get('/', userList);
router.post('/register', validateMiddleware(userSchema.registerUser, 'body'), registerUser);
router.post('/login', validateMiddleware(userSchema.loginUser, 'body'), loginUser);
router.get('/protected', passport.authenticate('jwt', { session: false }), auth);

module.exports = router;
