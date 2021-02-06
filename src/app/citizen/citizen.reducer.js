import { combineReducers } from "redux";
import {
  CLEAR_PDF,
  STORE_MY_INFORMATION,
  STORE_MY_REQUESTS,
  STORE_PDF,
  STORE_XHTML,
  STORE_REQUEST_PATTERN,
  CLEAR_XHTML,
} from "./citizen.constants";

const initialState = {
  requests: [],
  information: [],
  pattern: null,
  currentPDF: null,
  currentXHTML: null,
};

const requestsReducer = (state = initialState.requests, action) => {
  if (action.type === STORE_MY_REQUESTS) {
    return action.payload;
  }
  return state;
};

const informationReducer = (state = initialState.information, action) => {
  if (action.type === STORE_MY_INFORMATION) {
    return action.payload;
  }
  return state;
};

const patternReducer = (state = initialState.pattern, action) => {
  if (action.type === STORE_REQUEST_PATTERN) {
    return action.payload;
  }
  return state;
};

const currentPDFReducer = (state = initialState.currentPDF, action) => {
  if (action.type === STORE_PDF) {
    return action.payload;
  } else if (action.type === CLEAR_PDF) {
    return state;
  }
  return state;
};

const currentXTHMLReducer = (state = initialState.currentXHTML, action) => {
  if (action.type === STORE_XHTML) {
    return action.payload;
  } else if (action.type === CLEAR_XHTML) {
    return state;
  }
  return state;
};

export const citizenReducer = combineReducers({
  requests: requestsReducer,
  information: informationReducer,
  pattern: patternReducer,
  currentPDF: currentPDFReducer,
  currentXHTML: currentXTHMLReducer,
});
