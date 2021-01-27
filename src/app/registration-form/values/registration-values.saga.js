import { put } from "redux-saga/effects";

import * as actions from "./registration-values.actions";

export function* changeNameSaga(action) {
  yield put(actions.storeName(action.payload));
}

export function* changeLastnameSaga(action) {
  yield put(actions.storeLastname(action.payload));
}

export function* changeEmailSaga(action) {
  yield put(actions.storeEmail(action.payload));
}

export function* changeUsernameSaga(action) {
  yield put(actions.storeUsername(action.payload));
}

export function* changePasswordSaga(action) {
  yield put(actions.storePassword(action.payload));
}

export function* changePasswordConfirmationSaga(
  action
) {
  yield put(actions.storePasswordConfirmation(action.payload));
}

export function* changeBirthDateSaga(action) {
  yield put(actions.storeBirthDate(action.payload));
}
