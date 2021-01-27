import { put } from "redux-saga/effects";
import { storeEmailValue, storePasswordValue } from "./login-values.actions";

export function* changeEmailValueSaga(action) {
  yield put(storeEmailValue(action.payload));
}

export function* changePasswordValueSaga(action) {
  yield put(storePasswordValue(action.payload));
}
