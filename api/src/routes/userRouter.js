import Router from 'express';
import passport from 'passport';
import initPassport from '../../config/passport';
import {
    userList,
    registerUser,
    loginUser,
    auth,
} from '../controllers/userController';
import validateMiddleware from '../middlewares/validate';
import { userSchema } from '../validations/schemas';

initPassport(passport);
const router = new Router();

router.get('/', userList);
router.post('/register', validateMiddleware(userSchema.registerUser, 'body'), registerUser);
router.post('/login', validateMiddleware(userSchema.loginUser, 'body'), loginUser);
router.get('/auth', passport.authenticate('jwt', { session: false }), auth);

export default router;
