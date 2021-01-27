import { put } from "redux-saga/effects";
import { storeIsLoadingValue } from "./registration-form.actions";

export function* setIsLoadingValueSaga(action) {
  yield put(storeIsLoadingValue(action.payload));
}
