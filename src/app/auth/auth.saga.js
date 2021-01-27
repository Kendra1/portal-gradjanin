import { call, put } from "redux-saga/effects";
import apiRequest from "../api/api.saga";

import { storeLoggedUser, clearLoggedUser } from "./auth.actions";
import {
  persistLoggedUser,
  readLoggedUser,
  abandonLoggedUser,
  readLoggedUserData,
} from "./auth.utils";
import { registerAPI, loginAPI } from "./auth.api";
import {
  storeLoggedUsersData,
  clearLoggedUsersData,
} from "../account/account.actions";

export function* registerNewUser(action) {
  yield call(apiRequest, registerAPI(action.payload));
}

export function* logUserIn(userCredentials) {
  const loggedUser = yield call(apiRequest, loginAPI(userCredentials));
  yield call(persistLoggedUser, loggedUser);
  yield put(storeLoggedUser(loggedUser));
}

export function* initAuth() {
  const loggedUser = yield call(readLoggedUser);
  const loggedUserData = yield call(readLoggedUserData);

  if (loggedUser) {
    yield put(storeLoggedUser(loggedUser));
  }
  if (loggedUserData) {
    yield put(storeLoggedUsersData(loggedUserData));
  }
}

export function* logUserOut() {
  yield put(clearLoggedUser());
  yield put(clearLoggedUsersData());
  yield call(abandonLoggedUser);
}
