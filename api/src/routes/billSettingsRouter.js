import express from 'express';
import {
  getBillSettings,
  updateBillSettings,
  generatePdf,
} from '../controllers/billSettingsController';

const router = express.Router();

router.get('/', getBillSettings);
router.get('/:id', generatePdf);
router.post('/', updateBillSettings);

export default router;
