const express = require('express');
const router = express.Router();

router.get('/createProject', (req, res) => {
    console.log('Project created');
});