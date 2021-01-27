import { call, put } from "redux-saga/effects";
import { initAuth } from "../auth/auth.saga";
import { storeInitComplete } from "./init.actions";

export function* initAppSaga() {
  yield call(initAuth);
  yield put(storeInitComplete());
}
