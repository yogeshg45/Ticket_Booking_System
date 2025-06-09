const { createShow, getShows } = require('../models/showModel');
const { bookSeats } = require('../models/bookingModel');

const createShowHandler = async (req, res) => {
  const { name, start_time, total_seats } = req.body;
  try {
    const show = await createShow(name, start_time, total_seats);
    res.json({ success: true, show });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getShowsHandler = async (req, res) => {
  try {
    const shows = await getShows();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const bookSeatsHandler = async (req, res) => {
  const { show_id, seats_requested } = req.body;
  try {
    const result = await bookSeats(show_id, seats_requested);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createShowHandler,
  getShowsHandler,
  bookSeatsHandler
};
