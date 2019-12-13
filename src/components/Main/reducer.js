import {
  GET_CONGRESS,
  GET_CONGRESS_FAIL,
  GET_CONGRESS_SUCCESS,
} from './actionTypes';

const defaultState = {
  congress: [],
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CONGRESS:
      return {
        ...state,
        fetching: true,
      };
    case GET_CONGRESS_FAIL:
      return {
        ...state,
        fetching: false,
        errorMessage: payload,
      };
    case GET_CONGRESS_SUCCESS:
      return {
        ...state,
        fetching: false,
        congress: payload.members,
      };
    default:
      return state;
  }
};
