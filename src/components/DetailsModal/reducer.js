import {
  GET_CONGRESSMAN_DETAILS,
  GET_CONGRESSMAN_DETAILS_FAIL,
  GET_CONGRESSMAN_DETAILS_SUCCESS,
} from './actionTypes';

const defaultState = {
  details: [],
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CONGRESSMAN_DETAILS:
      return {
        ...state,
        fetching: true,
      };
    case GET_CONGRESSMAN_DETAILS_FAIL:
      return {
        ...state,
        fetching: false,
        errorMessage: payload,
      };
    case GET_CONGRESSMAN_DETAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        details: payload,
      };
    default:
      return state;
  }
};
