import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getCongressFail,
  getCongressSuccess,
} from './actions';

import {
  GET_CONGRESS,
} from './actionTypes';

import {
  getCongress,
} from './api';

function* getCongressWorker({ payload: { params } }) {
  try {
    const payload = yield call(getCongress, params);
    yield put(getCongressSuccess(payload));
  } catch ({ message }) {
    yield put(getCongressFail(message));
  }
}

export function* congressWatcher() {
  yield takeLatest(GET_CONGRESS, getCongressWorker);
}

export default {
  congressWatcher,
};
