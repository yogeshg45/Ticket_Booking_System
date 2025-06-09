# Ticket_Booking_System

Ticket Booking System
=====================

Overview
--------
This project is a basic backend ticket booking system similar to platforms like RedBus or BookMyShow. It allows admins to create shows or bus trips, and users to view shows and book seats with concurrency handling to avoid overbooking.

Tech Stack
----------
- Node.js
- Express.js
- PostgreSQL (Neon cloud database)
- dotenv for environment variables

Features
--------
1. Admin Functionality:
   - Create shows or trips with details such as name, start time, and total number of seats.

2. User Functionality:
   - Retrieve a list of available shows or trips.
   - Book one or more seats for a specific show.
   - Booking status can be PENDING, CONFIRMED, or FAILED.

3. Concurrency Handling:
   - Ensures data consistency and prevents overbooking when multiple users try to book seats simultaneously.

Setup Instructions
------------------
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ticket-booking-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Setup environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     DATABASE_URL=<Your Neon PostgreSQL connection string>
     PORT=3000
     ```

4. Start the server:
   ```
   npm start
   ```

5. Test API Endpoints using Postman or any API client:
   - Create Show (POST): `http://localhost:3000/admin/create-show`
   - Get Shows (GET): `http://localhost:3000/user/shows`
   - Book Seats (POST): `http://localhost:3000/user/book`

Notes
-----
- If you want to test APIs via Postman web app and your server runs locally, use ngrok or Postman Desktop Agent.
- This system uses transactions or locking mechanisms to prevent overbooking.

Future Improvements
-------------------
- Implement booking expiry to auto-fail pending bookings after 2 minutes.
- Add user authentication and authorization.
- Add frontend UI.
- Improve error handling and validation.

Author
------
Yogesh

Date
----
June 2025
