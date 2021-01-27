import { createSelector } from 'reselect';

const _selectSnackbarMessages = (state) => state.snackbar.messages;

export const selectSnackbarMessages = createSelector(_selectSnackbarMessages, (value) => value);
