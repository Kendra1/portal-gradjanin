import { createSelector } from "reselect";

const _selectRequests = (state) => state.official.requests;

const _selectInformation = (state) => state.official.information;

const _selectCreation = (state) => state.official.creation;

const _selectPattern = (state) => state.official.pattern;

const _selectInformationXTHML = (state) => state.official.currentXHTML;

const _selectInformationToPDF = (state) => state.official.currentPDF;

const _selectSearchResults = (state) => state.official.searchResults;

const _selectAdvancedSearchResults = (state) =>
  state.official.advancedSearchResults;

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

export const selectSearchResults = createSelector(
  [_selectSearchResults],
  (searchResults) => searchResults
);

export const selectAdvancedSearchResults = createSelector(
  [_selectAdvancedSearchResults],
  (advancedSearchResults) => advancedSearchResults
);
