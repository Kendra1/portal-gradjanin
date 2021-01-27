import { put, select, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import { saveUserDataAPI } from "./account.api";
import {
  storeLoggedUsersData
} from "./account.actions";
import { loggedUserDataAPI } from "../auth/auth.api";
import { persistLoggedUsersData } from "../auth/auth.utils";

export function* getLoggedUsersDataSaga() {
  try {
    const loggedUsersData = yield call(apiRequest, loggedUserDataAPI());
    yield put(storeLoggedUsersData(loggedUsersData));
    yield call(persistLoggedUsersData, loggedUsersData);
  } catch (e) {
    console.error(e);
  }
}

export function* saveUserDataSaga(action) {
  try {
    const data = action.payload;
    const user = yield call(apiRequest, saveUserDataAPI(data));
    const loggedUsersData = yield call(apiRequest, loggedUserDataAPI());
    yield put(storeLoggedUsersData(loggedUsersData));
    yield call(persistLoggedUsersData, loggedUsersData);
  } catch (e) {
    console.error(e);
  }
}