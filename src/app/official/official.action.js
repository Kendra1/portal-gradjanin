import {
  ACCEPT_REQUEST,
  DENY_REQUEST,
  EXPORT_INFORMATION_XHTML,
  GET_REQUESTS,
  EXPORT_INFORMATION_PDF,
  STORE_INFORMATION_PDF,
  STORE_INFORMATION_XHTML,
  STORE_REQUESTS,
  GET_INFORMATION,
  STORE_INFORMATION,
  CREATE_RESPONSE,
  STORE_CREATION,
  STORE_INFORMATION_PATTERN,
  GET_INFORMATION_PATTERN,
  SEARCH_REQUESTS,
  STORE_SEARCH_RESULTS,
  ADVANCED_STORE_SEARCH_RESULTS,
  ADVANCED_SEARCH_REQUESTS,
} from "./official.constants";

export const getRequests = () => ({
  type: GET_REQUESTS,
});

export const storeRequests = (payload) => ({
  type: STORE_REQUESTS,
  payload,
});

export const getInformation = (payload) => ({
  type: GET_INFORMATION,
  payload,
});

export const storeInformation = (payload) => ({
  type: STORE_INFORMATION,
  payload,
});

export const createResponse = (payload) => ({
  type: CREATE_RESPONSE,
  payload,
});

export const storeCreation = (payload) => ({
  type: STORE_CREATION,
  payload,
});

export const acceptRequest = (payload) => ({
  type: ACCEPT_REQUEST,
  payload,
});

export const denyRequest = (payload) => ({
  type: DENY_REQUEST,
  payload,
});

export const getInformationPattern = () => ({
  type: GET_INFORMATION_PATTERN,
});

export const storeInformationPattern = (payload) => ({
  type: STORE_INFORMATION_PATTERN,
  payload,
});

export const exportInformationXHTML = (payload) => ({
  type: EXPORT_INFORMATION_XHTML,
  payload,
});

export const storeInformationXHTML = (payload) => ({
  type: STORE_INFORMATION_XHTML,
  payload,
});

export const exportInformationPDF = (payload) => ({
  type: EXPORT_INFORMATION_PDF,
  payload,
});

export const storeInformationPDF = (payload) => ({
  type: STORE_INFORMATION_PDF,
  payload,
});

export const searchRequests = (payload) => ({
  type: SEARCH_REQUESTS,
  payload,
});

export const storeSearchResults = (payload) => ({
  type: STORE_SEARCH_RESULTS,
  payload,
});

export const advancedSearchRequests = (payload) => ({
  type: ADVANCED_SEARCH_REQUESTS,
  payload,
});

export const advancedStoreSearchResults = (payload) => ({
  type: ADVANCED_STORE_SEARCH_RESULTS,
  payload,
});
