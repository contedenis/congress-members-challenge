import {
  GET_CONGRESSMAN_DETAILS,
  GET_CONGRESSMAN_DETAILS_FAIL,
  GET_CONGRESSMAN_DETAILS_SUCCESS,
} from './actionTypes';

function getCongressmanDetails(id) {
  return {
    type: GET_CONGRESSMAN_DETAILS,
    payload: id,
  };
}

function getCongressmanDetailsFail(errorMessage) {
  return {
    type: GET_CONGRESSMAN_DETAILS_FAIL,
    payload: errorMessage,
  };
}

function getCongressmanDetailsSuccess(congress) {
  return {
    type: GET_CONGRESSMAN_DETAILS_SUCCESS,
    payload: congress,
  };
}

export {
  getCongressmanDetails,
  getCongressmanDetailsFail,
  getCongressmanDetailsSuccess,
};
