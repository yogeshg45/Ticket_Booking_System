const express = require('express');
const router = express.Router();
const { getShowsHandler, bookSeatsHandler } = require('../controllers/bookingController');

router.get('/shows', getShowsHandler);
router.post('/book', bookSeatsHandler);

module.exports = router;
