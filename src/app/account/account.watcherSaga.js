import { takeLatest } from "redux-saga/effects";
import {
  GET_LOGGED_USERS_DATA,
  SAVE_USER_DATA,
} from "./account.constants";
import {
  getLoggedUsersDataSaga,
  saveUserDataSaga
} from "./account.saga";

export function* watchAccountSaga() {
  yield takeLatest(GET_LOGGED_USERS_DATA, getLoggedUsersDataSaga);
  yield takeLatest(SAVE_USER_DATA, saveUserDataSaga);
}
