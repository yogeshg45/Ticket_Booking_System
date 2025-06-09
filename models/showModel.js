const pool = require('../db');

async function createShow(name, start_time, total_seats) {
  const result = await pool.query(
    'INSERT INTO shows (name, start_time, total_seats) VALUES ($1, $2, $3) RETURNING *',
    [name, start_time, total_seats]
  );
  return result.rows[0];
}

async function getShows() {
  const result = await pool.query('SELECT * FROM shows');
  return result.rows;
}

module.exports = { createShow, getShows };
