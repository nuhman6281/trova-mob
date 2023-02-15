

function fetchBookings() {
  try {
    const bookingsJSON = require('../../mock/bookings.json');
    return Promise.resolve(bookingsJSON);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default fetchBookings;
