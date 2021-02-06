import { put, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  advancedStoreSearchResults,
  storeCreation,
  storeInformation,
  storeInformationPattern,
  storeInformationPDF,
  storeInformationXHTML,
  storeRequests,
  storeSearchResults,
} from "./official.action";
import {
  acceptRequestAPI,
  getRequestsAPI,
  denyRequestAPI,
  getInformationAPI,
  createResponseAPI,
  exportInformationToXTHMLAPI,
  exportInformationPDFAPI,
  advancedSearchResultsAPI,
  searchResultsAPI,
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
    const XHTML = yield call(
      apiRequest,
      exportInformationToXTHMLAPI(action.payload)
    );
    yield put(storeInformationXHTML(XHTML));
  } catch (e) {
    console.error(e);
  }
}

export function* exportInformationPDFSaga(action) {
  try {
    const PDF = yield call(apiRequest, exportInformationPDFAPI(action.payload));
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

export function* searchRequestsSaga(action) {
  try {
    const results = yield call(apiRequest, searchResultsAPI(action.payload));
    yield put(storeSearchResults(results));
  } catch (e) {
    console.error(e);
  }
}

export function* advancedSearchRequestsSaga(action) {
  try {
    const searchParams = action.payload;
    console.log(action.payload);
    const searchXML = document.implementation.createDocument(
      null,
      `searchZahtevMap`
    );

    if (searchParams.organVlasti) {
      const node = document.createElementNS(null, "organVlasti");
      node.appendChild(document.createTextNode(searchParams.organVlasti));
      searchXML.documentElement.appendChild(node);
    }

    if (searchParams.mestoOrganaVlasti) {
      const node = document.createElementNS(null, "mestoOrganaVlasti");
      node.appendChild(document.createTextNode(searchParams.mestoOrganaVlasti));
      searchXML.documentElement.appendChild(node);
    }

    if (searchParams.datumZahteva) {
      const node = document.createElementNS(null, "datumZahteva");
      node.appendChild(document.createTextNode(searchParams.datumZahteva));
      searchXML.documentElement.appendChild(node);
    }

    if (searchParams.imePodnosioca) {
      const node = document.createElementNS(null, "imePodnosioca");
      node.appendChild(document.createTextNode(searchParams.imePodnosioca));
      searchXML.documentElement.appendChild(node);
    }

    if (searchParams.mestoPodnosioca) {
      const node = document.createElementNS(null, "mestoPodnosioca");
      node.appendChild(document.createTextNode(searchParams.mestoPodnosioca));
      searchXML.documentElement.appendChild(node);
    }

    const node = document.createElementNS(null, "orOperator");
    node.appendChild(document.createTextNode(searchParams.orOperator));
    searchXML.documentElement.appendChild(node);

    const searchStr = new XMLSerializer().serializeToString(searchXML);

    console.log(searchStr);
    const results = yield call(apiRequest, advancedSearchResultsAPI(searchStr));
    yield put(advancedStoreSearchResults(results));
  } catch (e) {
    console.error(e);
  }
}
