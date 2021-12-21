const express = require('express');

const router = express.Router();
const {
    updateUserSettings,

} = require('../controllers/settingsController');

router.post('/', updateUserSettings);

module.exports = router;
