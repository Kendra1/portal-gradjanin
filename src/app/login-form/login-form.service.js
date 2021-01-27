import { put, call } from 'redux-saga/effects';

import { storeEmailErrors, storePasswordErrors } from './errors/login-errors.actions';
import { extractFieldErrors, extractNonFieldErrors } from './login-form.utils';
import { storeSnackbarMessages } from '../snackbar/snackbar.actions';

export function* handleErrorMessages(errorMessages) {
  const errors = Array.isArray(errorMessages) ? errorMessages : [errorMessages];

  const generalErrors = yield call(extractNonFieldErrors, errors, ['email', 'password']);
  const refactoredErrors = generalErrors.map((error) => ({
    type: 'error',
    message: error,
  }));
  yield put(storeSnackbarMessages(refactoredErrors));

  const emailErrors = yield call(extractFieldErrors, errors, 'email');
  yield put(storeEmailErrors(emailErrors));
  const passwordErrors = yield call(extractFieldErrors, errors, 'password');
  yield put(storePasswordErrors(passwordErrors));
}
