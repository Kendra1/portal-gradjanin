import { takeLatest } from "redux-saga/effects";

import * as constants from "./registration-values.constants";
import * as sagas from "./registration-values.saga";

export function* watchRegistrationFormValuesSaga() {
  yield takeLatest(constants.CHANGE_NAME, sagas.changeNameSaga);
  yield takeLatest(constants.CHANGE_LASTNAME, sagas.changeLastnameSaga);
  yield takeLatest(constants.CHANGE_EMAIL, sagas.changeEmailSaga);
  yield takeLatest(constants.CHANGE_USERNAME, sagas.changeUsernameSaga);
  yield takeLatest(constants.CHANGE_PASSWORD, sagas.changePasswordSaga);
  yield takeLatest(
    constants.CHANGE_PASSWORD_CONFIRMATION,
    sagas.changePasswordConfirmationSaga
  );
  yield takeLatest(constants.CHANGE_BIRTH_DATE, sagas.changeBirthDateSaga);
}
