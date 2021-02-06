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
  yield call(apiRequest, registerAPI(action));
}

export function* logUserIn(userCredentials) {
  const loggedUser = yield call(apiRequest, loginAPI(userCredentials));
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(loggedUser, "text/xml");
  const loggedUserObject = {
    email: xmlDoc.getElementsByTagName("email")[0].textContent,
    firstName: xmlDoc.getElementsByTagName("firstName")[0].textContent,
    lastName: xmlDoc.getElementsByTagName("lastName")[0].textContent,
    role: xmlDoc.getElementsByTagName("role")[0].textContent,
    token: xmlDoc.getElementsByTagName("token")[0].textContent,
  };
  yield call(persistLoggedUser, loggedUserObject);
  yield put(storeLoggedUser(loggedUserObject));
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
