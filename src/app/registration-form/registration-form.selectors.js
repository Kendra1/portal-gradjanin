import { createSelector } from "reselect";

const _selectIsLoading = (state) => state.registrationForm.isLoading;

export const selectIsLoading = createSelector(
  _selectIsLoading,
  (value) => value
);
