import { takeLatest } from 'redux-saga/effects';

import { submitLoginFormSaga, cleanLoginFormSaga, setIsLoadingValueSaga } from './login-form.saga';
import { SET_IS_LOADING_VALUE } from './login-form.constants';
import { SUBMIT_LOGIN_FORM, CLEAR_LOGIN_FORM } from './values/login-values.constants';

export function* watchLoginFormSaga() {
  yield takeLatest(SUBMIT_LOGIN_FORM, submitLoginFormSaga);
  yield takeLatest(CLEAR_LOGIN_FORM, cleanLoginFormSaga);
  yield takeLatest(SET_IS_LOADING_VALUE, setIsLoadingValueSaga);
}
