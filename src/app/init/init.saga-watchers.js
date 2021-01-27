import { takeLatest } from 'redux-saga/effects';
import { INIT_APP } from './init.constants';
import { initAppSaga } from './init.saga';

export function* watchInitSaga() {
  yield takeLatest(INIT_APP, initAppSaga);
}
