import moment from 'moment';
import { put, call, select } from 'redux-saga/effects';
import fetchServices from '../api/methods/fetchServices';
import {
  fetchServicesFailure,
  fetchServicesSuccess,
} from '../reducers/serviceReducer';

export default function* fetchServicesSaga({ payload }) {
  try {
    const getServicesResponse = yield call(fetchServices, payload);
    if (Array.isArray(getServicesResponse)) {
      const successMessage = {
        success: true,
        data: getServicesResponse,
      };
      yield put(fetchServicesSuccess(successMessage));
    } else {
      const failedResponse = {
        success: false,
        errorResponse: getServicesResponse,
      };
      yield put(fetchServicesFailure(failedResponse));
    }
  } catch (ex) {
    const failedResponse = {
      success: false,
      error: 'Failed to fetch services',
    };
    yield put(fetchServicesFailure(failedResponse));
  }
}
