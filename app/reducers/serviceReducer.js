import createReducer from '../utils/reducer/createReducer';

export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export function fetchServices(payload) {
  return {
    type: FETCH_SERVICES,
    payload,
  };
}

export function fetchServicesSuccess(payload) {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload,
  };
}

export function fetchServicesFailure(payload) {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload,
  };
}

const initialState = {
  services: null,
  error: null,
};

export const serviceReducer = createReducer(initialState, {
  [FETCH_SERVICES](state) {
    return {
      ...state,
    };
  },
  [FETCH_SERVICES_SUCCESS](state, action) {
    return {
      ...state,
      services: action?.payload,
    };
  },
  [FETCH_SERVICES_FAILURE](state, action) {
    return {
      ...state,
      error: action?.payload,
    };
  },
});
