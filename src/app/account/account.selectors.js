import { createSelector } from "reselect";

const _selectLoggedUsersData = (state) =>
  state.account.loggedUsersData;

export const selectLoggedUsersData = createSelector(
  _selectLoggedUsersData,
  (value) => value
);
