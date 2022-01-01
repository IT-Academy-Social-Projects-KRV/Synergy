import Router from 'express';
import statusCode from 'http-status';
import userRouter from './userRouter';
import projects from './projectRouter';
import items from './itemRouter';
import comments from './commentRouter';
import settings from './settingsRouter';

const router = new Router();

router.use('/users', userRouter);
router.use('/projects', projects);
router.use('/items', items);
router.use('/comments', comments);
router.use('/settings', settings);
router.use('/*', (req, res) => {
    res.status(statusCode.BAD_GATEWAY).send('Bad gateway');
});

export default router;
