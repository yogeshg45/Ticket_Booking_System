const express = require('express');
const router = express.Router();
const { createShowHandler } = require('../controllers/bookingController');

router.post('/create-show', createShowHandler);

module.exports = router;
