import { createSelector } from 'reselect';

const _selectEmailFieldErrors = (state) => state.loginForm.errors.emailErrors;
const _selectPasswordFieldErrors = (state) => state.loginForm.errors.passwordErrors;

export const selectEmailFieldErrors = createSelector(_selectEmailFieldErrors, (value) => value);
export const selectPasswordFieldErrors = createSelector(_selectPasswordFieldErrors, (value) => value);
