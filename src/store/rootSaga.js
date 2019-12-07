// @packages
import { all, fork } from 'redux-saga/effects';

// @app

export default function* rootSaga() {
  yield all([

  ].map(fork));
}
