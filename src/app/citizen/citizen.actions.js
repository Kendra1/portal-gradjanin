import * as constants from "./citizen.constants";

export const sendRequest = (payload) => ({
  type: constants.SEND_REQUEST,
  payload,
});

export const getMyRequests = () => ({
  type: constants.GET_MY_REQUESTS,
});

export const storeMyRequests = (payload) => ({
  type: constants.STORE_MY_REQUESTS,
  payload,
});

export const getMyInformation = () => ({
  type: constants.GET_MY_INFORMATION,
});

export const storeMyInformation = (payload) => ({
  type: constants.STORE_MY_INFORMATION,
  payload,
});

export const getRequestPattern = () => ({
  type: constants.GET_REQUEST_PATTERN,
});

export const storeRequestPattern = (payload) => ({
  type: constants.STORE_REQUEST_PATTERN,
  payload,
});

export const exportToXHTML = (payload) => ({
  type: constants.EXPORT_TO_XHTML,
  payload,
});

export const exportToPDF = (payload) => ({
  type: constants.EXPORT_TO_PDF,
  payload,
});

export const storeXHTML = (payload) => ({
  type: constants.STORE_XHTML,
  payload,
});

export const clearXHTML = () => ({
  type: constants.CLEAR_XHTML,
});

export const storePDF = (payload) => ({
  type: constants.STORE_PDF,
  payload,
});

export const clearPDF = () => ({
  type: constants.CLEAR_PDF,
});

export const exportToRDF = (payload) => ({
  type: constants.EXPORT_TO_RDF,
  payload,
});

export const storeRDF = (payload) => ({
  type: constants.STORE_RDF,
  payload,
});

export const exportToJSON = (payload) => ({
  type: constants.EXPORT_TO_JSON,
  payload,
});

export const storeJSON = (payload) => ({
  type: constants.STORE_JSON,
  payload,
});
