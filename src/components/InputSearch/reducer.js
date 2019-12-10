import {
  CLEAN_SEARCH_TERM,
  SEARCH_TERM,
} from './actionTypes';

const defaultState = {
  value: '',
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEARCH_TERM:
      return {
        ...state,
        value: payload,
      };
    case CLEAN_SEARCH_TERM:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};
