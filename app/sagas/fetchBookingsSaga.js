import moment from 'moment';
import { put, call, select } from 'redux-saga/effects';
import fetchBookings from '../api/methods/fetchBookings';
import {
  fetchBookingsFailure,
  fetchBookingsSuccess,
} from '../reducers/bookingReducer';

export default function* fetchBookingsSaga({ payload }) {
  try {
    const getBookingsResponse = yield call(fetchBookings, payload);
    if (Array.isArray(getBookingsResponse)) {
      const successMessage = {
        success: true,
        data: getBookingsResponse,
      };
      yield put(fetchBookingsSuccess(successMessage));
    } else {
      const failedResponse = {
        success: false,
        errorResponse: getBookingsResponse,
      };
      yield put(fetchBookingsFailure(failedResponse));
    }
  } catch (ex) {
    const failedResponse = {
      success: false,
      error: 'Failed to fetch bookings',
    };
    yield put(fetchBookingsFailure(failedResponse));
  }
}
