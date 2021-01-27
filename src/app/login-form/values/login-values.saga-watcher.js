import { takeLatest } from 'redux-saga/effects';

import { CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE } from './login-values.constants';
import { changeEmailValueSaga, changePasswordValueSaga } from './login-values.saga';

export function* watchLoginFormValuesSaga() {
  yield takeLatest(CHANGE_EMAIL_VALUE, changeEmailValueSaga);
  yield takeLatest(CHANGE_PASSWORD_VALUE, changePasswordValueSaga);
}
