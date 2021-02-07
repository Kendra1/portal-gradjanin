import { createSelector } from "reselect";

const _selectRequests = (state) => state.citizen.requests;

const _selectInformation = (state) => state.citizen.information;

const _selectPattern = (state) => state.citizen.pattern;

const _selectCurrentXHTML = (state) => state.citizen.currentXHTML;

const _selectCurrentPDF = (state) => state.citizen.currentPDF;

const _selectCurrentRDF = (state) => state.citizen.currentRDF;

const _selectCurrentJSON = (state) => state.citizen.currentJSON;

export const selectRequests = createSelector(
  [_selectRequests],
  (requests) => requests
);

export const selectInformation = createSelector(
  [_selectInformation],
  (information) => information
);

export const selectPattern = createSelector(
  [_selectPattern],
  (pattern) => pattern
);

export const selectCurrentXHTML = createSelector(
  [_selectCurrentXHTML],
  (currentXHTML) => currentXHTML
);

export const selectCurrentPDF = createSelector(
  [_selectCurrentPDF],
  (currentPDF) => currentPDF
);

export const selectCurrentRDF = createSelector(
  [_selectCurrentRDF],
  (currentRDF) => currentRDF
);

export const selectCurrentJSON = createSelector(
  [_selectCurrentJSON],
  (currentJSON) => currentJSON
);
