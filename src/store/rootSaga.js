// @packages
import { all, fork } from 'redux-saga/effects';

// @app
import main from '../components/Main/sagas';
import congressmanDetails from '../components/DetailsModal/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(main),
    ...Object.values(congressmanDetails),
  ].map(fork));
}
