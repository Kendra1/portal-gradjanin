import { call, put } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  getMyRequestsAPI,
  getMyInformationAPI,
  sendRequestAPI,
  exportToPDFAPI,
  exportToXHTMLAPI,
  getRequestPatternAPI,
  exportToRdfAPI,
  exportToJsonAPI,
} from "./citizen.api";
import {
  storeMyInformation,
  storeMyRequests,
  storePDF,
  storeRequestPattern,
  storeXHTML,
  storeRDF,
  storeJSON,
} from "./citizen.actions";

export function* sendRequestSaga(action) {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(action.payload, "text/xml");
    const xmlDocStr = new XMLSerializer().serializeToString(xmlDoc);
    yield call(apiRequest, sendRequestAPI(xmlDocStr));
  } catch (e) {
    console.error(e);
  }
}

export function* getRequestPatternSaga(action) {
  try {
    const requestPattern = yield call(apiRequest, getRequestPatternAPI());
    yield put(storeRequestPattern(requestPattern));
  } catch (e) {
    console.error(e);
  }
}

export function* getMyRequestsSaga() {
  try {
    const requests = yield call(apiRequest, getMyRequestsAPI());
    yield put(storeMyRequests(requests));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToXHTMLSaga(action) {
  try {
    const XHTMLRequest = yield call(
      apiRequest,
      exportToXHTMLAPI(action.payload)
    );
    yield put(storeXHTML(XHTMLRequest));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToPDFSaga(action) {
  try {
    const PDFRequest = yield call(apiRequest, exportToPDFAPI(action.payload));
    let binaryString = window.atob(PDFRequest);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/pdf" });

    yield put(storePDF(file));
  } catch (e) {
    console.error(e);
  }
}

export function* getMyInformationSaga() {
  try {
    const information = yield call(apiRequest, getMyInformationAPI());
    yield put(storeMyInformation(information));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToRDFSaga(action) {
  try {
    const result = yield call(apiRequest, exportToRdfAPI(action.payload));

    yield put(storeRDF(result));
  } catch (e) {
    console.error(e);
  }
}

export function* exportToJSONSaga(action) {
  try {
    const result = yield call(apiRequest, exportToJsonAPI(action.payload));
    let binaryString = window.atob(result);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/json" });
    yield put(storeJSON(file));
  } catch (e) {
    console.error(e);
  }
}
