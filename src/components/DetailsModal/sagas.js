import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getCongressmanDetailsFail,
  getCongressmanDetailsSuccess,
} from './actions';

import {
  GET_CONGRESSMAN_DETAILS,
} from './actionTypes';

import {
  getCongressmanDetails,
} from './api';

function* getCongressmanDetailsWorker({ payload: { id } }) {
  try {
    const payload = yield call(getCongressmanDetails, id);
    yield put(getCongressmanDetailsSuccess(payload));
  } catch ({ message }) {
    yield put(getCongressmanDetailsFail(message));
  }
}

export function* congressmanDetailsWatcher() {
  yield takeLatest(GET_CONGRESSMAN_DETAILS, getCongressmanDetailsWorker);
}

export default {
  congressmanDetailsWatcher,
};
