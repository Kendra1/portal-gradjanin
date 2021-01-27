import { takeLatest } from 'redux-saga/effects';

import { REGISTER_USER, LOGOUT_USER } from './auth.constants';
import { registerNewUser, logUserOut } from './auth.saga';

export function* authWatcherSaga() {
  yield takeLatest(REGISTER_USER, registerNewUser);
  yield takeLatest(LOGOUT_USER, logUserOut);
}
