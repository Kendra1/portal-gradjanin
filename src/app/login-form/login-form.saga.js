import { put, select, call } from "redux-saga/effects";

import { loginUser } from "../auth/auth.actions";
import { logUserIn } from "../auth/auth.saga";
import { storeIsLoadingValue } from "./login-form.actions";
import {
  clearLoginForm,
  clearEmailValue,
  clearPasswordValue,
} from "./values/login-values.actions";
import { selectLoginFormValues } from "./values/login-values.selectors";
import {
  clearEmailErrors,
  clearPasswordErrors,
} from "./errors/login-errors.actions";

export function* setIsLoadingValueSaga(action) {
  yield put(storeIsLoadingValue(action.payload));
}

export function* submitLoginFormSaga() {
  const userCredentials = yield select(selectLoginFormValues);
  const loginDoc = document.implementation.createDocument(null, `login`);
  const emailNode = document.createElementNS(null, "email");
  emailNode.appendChild(document.createTextNode(userCredentials.email));
  loginDoc.documentElement.appendChild(emailNode);
  const passwordNode = document.createElementNS(null, "password");
  passwordNode.appendChild(document.createTextNode(userCredentials.password));
  loginDoc.documentElement.appendChild(passwordNode);

  const loginDocStr = new XMLSerializer().serializeToString(loginDoc);
  try {
    yield call(logUserIn, loginDocStr);
    yield put(loginUser(userCredentials));
  } catch (error) {
    console.error(error);
  }
}

export function* cleanLoginFormSaga() {
  yield call(cleanLoginErrors);
  yield put(clearEmailValue());
  yield put(clearPasswordValue());
  yield put(storeIsLoadingValue(false));
}

export function* cleanLoginErrors() {
  yield put(clearEmailErrors());
  yield put(clearPasswordErrors());
}
