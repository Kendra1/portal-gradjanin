import { takeLatest } from "redux-saga/effects";
import {
  ACCEPT_REQUEST,
  DENY_REQUEST,
  GET_INFORMATION,
  GET_REQUESTS,
  GET_INFORMATION_PATTERN,
  CREATE_RESPONSE,
  SEARCH_REQUESTS,
  ADVANCED_SEARCH_REQUESTS,
  EXPORT_INFORMATION_PDF,
  EXPORT_INFORMATION_XHTML,
} from "./official.constants";
import {
  getRequestsSaga,
  acceptRequestSaga,
  denyRequestSaga,
  getInformationSaga,
  exportInformationToXTHMLSaga,
  createResponseSaga,
  getInformationPatternSaga,
  searchRequestsSaga,
  advancedSearchRequestsSaga,
  exportInformationPDFSaga,
} from "./official.saga";

export function* watchOfficialSaga() {
  yield takeLatest(GET_REQUESTS, getRequestsSaga);
  yield takeLatest(ACCEPT_REQUEST, acceptRequestSaga);
  yield takeLatest(DENY_REQUEST, denyRequestSaga);
  yield takeLatest(GET_INFORMATION, getInformationSaga);
  yield takeLatest(CREATE_RESPONSE, createResponseSaga);
  yield takeLatest(GET_INFORMATION_PATTERN, getInformationPatternSaga);
  yield takeLatest(SEARCH_REQUESTS, searchRequestsSaga);
  yield takeLatest(ADVANCED_SEARCH_REQUESTS, advancedSearchRequestsSaga);
  yield takeLatest(EXPORT_INFORMATION_PDF, exportInformationPDFSaga);
  yield takeLatest(EXPORT_INFORMATION_XHTML, exportInformationToXTHMLSaga);
}
