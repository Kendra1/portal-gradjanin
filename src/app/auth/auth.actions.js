import { REGISTER_USER, LOGIN_USER, STORE_LOGGED_USER, CLEAR_LOGGED_USER, LOGOUT_USER } from './auth.constants';

export const storeLoggedUser = (payload) => ({
  type: STORE_LOGGED_USER,
  payload,
});

export const clearLoggedUser = () => ({
  type: CLEAR_LOGGED_USER,
});

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
