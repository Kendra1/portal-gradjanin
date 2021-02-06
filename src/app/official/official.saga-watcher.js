import { takeLatest } from "redux-saga/effects";
import {
  ACCEPT_REQUEST,
  DENY_REQUEST,
  GET_INFORMATION,
  GET_REQUESTS,
  STORE_CREATION,
  GET_INFORMATION_PATTERN,
  CREATE_RESPONSE,
} from "./official.constants";
import {
  getRequestsSaga,
  acceptRequestSaga,
  denyRequestSaga,
  getInformationSaga,
  storeCreationSaga,
  createResponseSaga,
  getInformationPatternSaga,
} from "./official.saga";

export function* watchOfficialSaga() {
  yield takeLatest(GET_REQUESTS, getRequestsSaga);
  yield takeLatest(ACCEPT_REQUEST, acceptRequestSaga);
  yield takeLatest(DENY_REQUEST, denyRequestSaga);
  yield takeLatest(GET_INFORMATION, getInformationSaga);
  yield takeLatest(CREATE_RESPONSE, createResponseSaga);
  yield takeLatest(GET_INFORMATION_PATTERN, getInformationPatternSaga);
}
