import { combineReducers } from "redux";
import {
  STORE_INFORMATION_XHTML,
  STORE_REQUESTS,
  STORE_INFORMATION_PDF,
  STORE_INFORMATION,
  STORE_CREATION,
  STORE_INFORMATION_PATTERN,
} from "./official.constants";

const initialState = {
  requests: [],
  information: [],
  creation: null,
  pattern: null,
  currentXHTML: null,
  currentPDF: null,
};

const requestsReducer = (state = initialState.requests, action) => {
  if (action.type === STORE_REQUESTS) {
    return action.payload;
  }
  return state;
};

const informationReducer = (state = initialState.information, action) => {
  if (action.type === STORE_INFORMATION) {
    return action.payload;
  }
  return state;
};

const creationReducer = (state = initialState.creation, action) => {
  if (action.type === STORE_CREATION) {
    return action.payload;
  }
  return state;
};

const patternReducer = (state = initialState.pattern, action) => {
  if (action.type === STORE_INFORMATION_PATTERN) {
    return action.payload;
  }
  return state;
};

const XHTMLInformationReducer = (state = initialState.currentXHTML, action) => {
  if (action.type === STORE_INFORMATION_XHTML) {
    return action.payload;
  }
  return state;
};

const PDFInformationReducer = (state = initialState.currentPDF, action) => {
  if (action.type === STORE_INFORMATION_PDF) {
    return action.payload;
  }
  return state;
};

export const officialReducer = combineReducers({
  requests: requestsReducer,
  information: informationReducer,
  creation: creationReducer,
  pattern: patternReducer,
  currentXHTML: XHTMLInformationReducer,
  currentPDF: PDFInformationReducer,
});
