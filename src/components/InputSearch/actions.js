import {
  SEARCH_TERM,
  CLEAN_SEARCH_TERM,
} from './actionTypes';

function setSearchTerm(searchTerm) {
  return {
    type: SEARCH_TERM,
    payload: searchTerm,
  };
}

function cleanSearchTerm() {
  return {
    type: CLEAN_SEARCH_TERM,
  };
}

export {
  setSearchTerm,
  cleanSearchTerm,
};
