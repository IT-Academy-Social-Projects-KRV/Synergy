const express = require('express');
const router = express.Router();

const { createItem } = require('../controllers/singleProjectController');

router.get('/create/item', createItem);

module.exports = router;