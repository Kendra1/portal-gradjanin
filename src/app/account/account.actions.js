import {
  GET_LOGGED_USERS_DATA,
  STORE_LOGGED_USERS_DATA,
  SAVE_USER_DATA,
  CLEAR_LOGGED_USERS_DATA
} from "./account.constants";

export const getLoggedUsersData = () => ({
  type: GET_LOGGED_USERS_DATA,
});

export const storeLoggedUsersData = (payload) => ({
  type: STORE_LOGGED_USERS_DATA,
  payload,
});

export const clearLoggedUsersData = () => ({
  type: CLEAR_LOGGED_USERS_DATA,
});

export const saveUserData = (payload) => ({
  type: SAVE_USER_DATA,
  payload,
});
