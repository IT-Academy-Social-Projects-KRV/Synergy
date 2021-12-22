const express = require('express');

const router = express.Router();
const {
    updateUserSettings,
    updatePassword,
} = require('../controllers/settingsController');

router.post('/', updateUserSettings);
router.post('/reset', updatePassword);

module.exports = router;
