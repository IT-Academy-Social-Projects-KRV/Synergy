const express = require('express');
const router = express.Router();
const { create, getOneProject } = require('../controllers/projectController');

router.get('/create', create);
router.get('/:id', getOneProject);

module.exports = router;