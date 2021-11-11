const express = require('express')
const router = express.Router()
const { create } = require('../controllers/projectController')

router.get('/create', create)

module.exports = router;