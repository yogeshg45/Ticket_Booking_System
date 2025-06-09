const pool = require('../db');

async function bookSeats(show_id, seats_requested) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const totalSeatsRes = await client.query(
      'SELECT total_seats FROM shows WHERE id = $1 FOR UPDATE',
      [show_id]
    );
    const totalSeats = totalSeatsRes.rows[0]?.total_seats;

    const bookedRes = await client.query(
      "SELECT COALESCE(SUM(seats_booked), 0) AS booked FROM bookings WHERE show_id = $1 AND status = 'CONFIRMED'",
      [show_id]
    );
    const booked = bookedRes.rows[0].booked;

    if (booked + seats_requested > totalSeats) {
      await client.query('ROLLBACK');
      return { status: 'FAILED' };
    }

    const result = await client.query(
      "INSERT INTO bookings (show_id, seats_booked, status) VALUES ($1, $2, $3) RETURNING *",
      [show_id, seats_requested, 'CONFIRMED']
    );

    await client.query('COMMIT');
    return { status: 'CONFIRMED', booking: result.rows[0] };
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    return { status: 'FAILED' };
  } finally {
    client.release();
  }
}

module.exports = { bookSeats };
