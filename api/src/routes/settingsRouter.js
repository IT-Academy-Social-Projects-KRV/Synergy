import express from 'express';
import {
    updateUserSettings,
    updatePassword,
} from '../controllers/settingsController';

const router = express.Router();

router.post('/', updateUserSettings);
router.post('/reset', updatePassword);

export default router;
