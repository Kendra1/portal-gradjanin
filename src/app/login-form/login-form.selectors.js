import { createSelector } from 'reselect';

const _selectIsLoading = (state) => state.loginForm.isLoading;

export const selectIsLoading = createSelector(_selectIsLoading, (value) => value);
