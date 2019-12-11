import {
  ADVANCED_SEARCH,
  CLEAN_ADVANCED_SEARCH,
} from './actionTypes';

const defaultState = {
  values: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADVANCED_SEARCH:
      return {
        ...state,
        values: payload,
      };
    case CLEAN_ADVANCED_SEARCH:
      return {
        ...state,
        values: [],
      };
    default:
      return state;
  }
};
