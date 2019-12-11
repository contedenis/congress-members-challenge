import {
  ADVANCED_SEARCH,
  CLEAN_ADVANCED_SEARCH,
} from './actionTypes';

function setAdvancedSearch(advancedSearch) {
  return {
    type: ADVANCED_SEARCH,
    payload: advancedSearch,
  };
}

function cleanAdvancedSearch() {
  return {
    type: CLEAN_ADVANCED_SEARCH,
  };
}

export {
  setAdvancedSearch,
  cleanAdvancedSearch,
};
