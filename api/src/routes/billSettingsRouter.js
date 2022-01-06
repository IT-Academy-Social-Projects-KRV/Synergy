import express from 'express';
import {
  getBillSettings,
  updateBillSettings,
} from '../controllers/billSettingsController';

const router = express.Router();

router.get('/', getBillSettings);
router.post('/', updateBillSettings);

export default router;
