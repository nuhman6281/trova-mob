import createReducer from '../utils/reducer/createReducer';

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

export const UPDATE_BOOKING_STATUS = 'UPDATE_BOOKING_STATUS';

export function fetchBookings(payload) {
  return {
    type: FETCH_BOOKINGS,
    payload,
  };
}

export function fetchBookingsSuccess(payload) {
  return {
    type: FETCH_BOOKINGS_SUCCESS,
    payload,
  };
}

export function fetchBookingsFailure(payload) {
  return {
    type: FETCH_BOOKINGS_FAILURE,
    payload,
  };
}

export function updateBookingStatus(payload) {
  return {
    type: UPDATE_BOOKING_STATUS,
    payload,
  };
}

const initialState = {
  bookings: null,
  error: null,
};

export const bookingReducer = createReducer(initialState, {
  [FETCH_BOOKINGS](state) {
    return {
      ...state,
    };
  },
  [FETCH_BOOKINGS_SUCCESS](state, action) {
    return {
      ...state,
      bookings: action?.payload,
    };
  },
  [FETCH_BOOKINGS_FAILURE](state, action) {
    return {
      ...state,
      error: action?.payload,
    };
  },
  [UPDATE_BOOKING_STATUS](state, action) {
    const { data } = state?.bookings || {};
    let findItem = data?.find(x => x.id === action?.payload?.id);
    findItem.status = action?.payload?.status;
    return {
      ...state,
      bookings: { ...state.bookings, data },
    };
  },
});
