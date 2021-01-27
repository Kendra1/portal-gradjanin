import { createSelector } from 'reselect';


const _selectLoggedUser = (state) => state.auth.loggedUser;
const _selectLoggedUserToken = (state) => state.auth.loggedUser?.token;

export const selectLoggedUser = createSelector(_selectLoggedUser, (value) => value);
export const selectLoggedUserToken = createSelector(_selectLoggedUserToken, (value) => value);
