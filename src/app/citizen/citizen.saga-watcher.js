import { takeLatest } from "redux-saga/effects";
import {
  EXPORT_TO_PDF,
  GET_MY_INFORMATION,
  GET_MY_REQUESTS,
  SEND_REQUEST,
  EXPORT_TO_XHTML,
  GET_REQUEST_PATTERN,
} from "./citizen.constants";
import {
  getMyRequestsSaga,
  sendRequestSaga,
  getMyInformationSaga,
  exportToPDFSaga,
  exportToXHTMLSaga,
  getRequestPatternSaga,
} from "./citizen.saga";

export function* watchCitizenSaga() {
  yield takeLatest(SEND_REQUEST, sendRequestSaga);
  yield takeLatest(GET_MY_REQUESTS, getMyRequestsSaga);
  yield takeLatest(GET_MY_INFORMATION, getMyInformationSaga);
  yield takeLatest(EXPORT_TO_PDF, exportToPDFSaga);
  yield takeLatest(EXPORT_TO_XHTML, exportToXHTMLSaga);
  yield takeLatest(GET_REQUEST_PATTERN, getRequestPatternSaga);
}
