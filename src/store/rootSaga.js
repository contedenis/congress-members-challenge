// @packages
import { all, fork } from 'redux-saga/effects';

// @app
import main from '../components/Main/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(main),
  ].map(fork));
}
