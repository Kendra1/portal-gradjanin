import { createSelector } from 'reselect';

const _selectLoginFormValues = (state) => ({
  email: state.loginForm.userCredentials.email,
  password: state.loginForm.userCredentials.password,
});

const _selectEmail = (state) => state.loginForm.userCredentials.email;
const _selectPassword = (state) => state.loginForm.userCredentials.password;

export const selectLoginFormValues = createSelector(_selectLoginFormValues, (value) => value);
export const selectEmail = createSelector(_selectEmail, (value) => value);
export const selectPassword = createSelector(_selectPassword, (value) => value);
