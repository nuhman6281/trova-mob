/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_BOOKINGS } from '../reducers/bookingReducer';
import { FETCH_SERVICES } from '../reducers/serviceReducer';
import fetchBookingsSaga from './fetchBookingsSaga';
import fetchServicesSaga from './fetchServicesSaga';

export default function* watch() {
  yield all([takeEvery(FETCH_BOOKINGS, fetchBookingsSaga)]);
  yield all([takeEvery(FETCH_SERVICES, fetchServicesSaga)]);
}
