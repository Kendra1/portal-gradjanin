import { takeLatest } from "redux-saga/effects";

import {
  setIsLoadingValueSaga,
  submitRegisterFormSaga,
} from "./registration-form.saga";
import { SET_IS_LOADING_VALUE } from "./registration-form.constants";
import { SUBMIT_REGISTRATION_FORM } from "./values/registration-values.constants";

export function* watchRegistrationFormSaga() {
  yield takeLatest(SET_IS_LOADING_VALUE, setIsLoadingValueSaga);
  yield takeLatest(SUBMIT_REGISTRATION_FORM, submitRegisterFormSaga);
}
