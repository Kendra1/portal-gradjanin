import { createSelector } from "reselect";

const _selectRequests = (state) => state.official.requests;

const _selectInformation = (state) => state.official.information;

const _selectCreation = (state) => state.official.creation;

const _selectPattern = (state) => state.official.pattern;

const _selectInformationXTHML = (state) => state.official.currentXHTML;

const _selectInformationToPDF = (state) => state.official.currentPDF;

export const selectRequests = createSelector(
  [_selectRequests],
  (requests) => requests
);

export const selectInformation = createSelector(
  [_selectInformation],
  (information) => information
);

export const selectCreation = createSelector(
  [_selectCreation],
  (creation) => creation
);

export const selectPattern = createSelector(
  [_selectPattern],
  (pattern) => pattern
);

export const selectInformationXHTML = createSelector(
  [_selectInformationXTHML],
  (currentXHTML) => currentXHTML
);

export const selectInformationPDF = createSelector(
  [_selectInformationToPDF],
  (currentPDF) => currentPDF
);
