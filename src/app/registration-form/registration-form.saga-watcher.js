import { takeLatest } from "redux-saga/effects";

import { setIsLoadingValueSaga } from "./registration-form.saga";
import { SET_IS_LOADING_VALUE } from "./registration-form.constants";

export function* watchLoginFormSaga() {
  yield takeLatest(SET_IS_LOADING_VALUE, setIsLoadingValueSaga);
}
