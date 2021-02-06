import { put, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  storeCreation,
  storeInformation,
  storeInformationPattern,
  storeInformationPDF,
  storeInformationXHTML,
  storeRequests,
} from "./official.action";
import {
  acceptRequestAPI,
  getRequestsAPI,
  denyRequestAPI,
  getInformationAPI,
  createResponseAPI,
} from "./official.api";
import { transformToString } from "../utils";

export function* storeCreationSaga(status) {
  yield put(storeCreation(status));
}

export function* getRequestsSaga() {
  try {
    const requests = yield call(apiRequest, getRequestsAPI());
    yield put(storeRequests(requests));
  } catch (e) {
    console.error(e);
  }
}

export function* getInformationSaga() {
  try {
    const information = yield call(apiRequest, getInformationAPI());
    yield put(storeInformation(information));
  } catch (e) {
    console.error(e);
  }
}

export function* createResponseSaga(action) {
  try {
    const response = transformToString(action.payload);
    const id = yield call(apiRequest, createResponseAPI(response));
    yield call(storeCreationSaga, id);
  } catch (e) {
    console.error(e);
  }
}

export function* acceptRequestSaga(action) {
  try {
    const parser = new DOMParser();
    const document = parser.parseFromString(action.payload, "text/xml");
    const obavestenje = document.implementation.createDocument(
      null,
      `obavestenjeNotificationDto`
    );
    const idNode = document.createElementNS(null, "obavestenjeId");
    idNode.appendChild(
      document.createTextNode(
        document.getElementsByTagName("documentId")[0].textContent
      )
    );
    obavestenje.documentElement.appendChild(idNode);

    const obavestenjeStr = new XMLSerializer().serializeToString(obavestenje);
    yield call(apiRequest, acceptRequestAPI(obavestenjeStr));
  } catch (e) {
    console.error(e);
  }
}

export function* denyRequestSaga(action) {
  try {
    yield call(apiRequest, denyRequestAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* getInformationPatternSaga() {
  try {
    const pattern = yield call(apiRequest, getInformationAPI());
    yield put(storeInformationPattern(pattern));
  } catch (e) {
    console.error(e);
  }
}

export function* exportInformationToXTHMLSaga(action) {
  try {
    const XHTML = yield call(apiRequest, action.payload);
    yield put(storeInformationXHTML(XHTML));
  } catch (e) {
    console.error(e);
  }
}

export function* exportInformationPDFSaga(action) {
  try {
    const PDF = yield call(apiRequest, action.payload);
    let binaryString = window.atob(PDF);

    let binaryLen = binaryString.length;

    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      let ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    const file = new Blob([bytes], { type: "application/pdf" });
    yield put(storeInformationPDF(file));
  } catch (e) {
    console.error(e);
  }
}
