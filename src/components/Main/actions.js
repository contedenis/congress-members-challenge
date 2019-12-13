import {
  GET_CONGRESS,
  GET_CONGRESS_FAIL,
  GET_CONGRESS_SUCCESS,
} from './actionTypes';

function getCongress(params) {
  return {
    type: GET_CONGRESS,
    payload: params,
  };
}

function getCongressFail(errorMessage) {
  return {
    type: GET_CONGRESS_FAIL,
    payload: errorMessage,
  };
}

function getCongressSuccess(congress) {
  return {
    type: GET_CONGRESS_SUCCESS,
    payload: congress,
  };
}

export {
  getCongress,
  getCongressFail,
  getCongressSuccess,
};
