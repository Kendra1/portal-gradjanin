import { combineReducers } from "redux";

import { STORE_LOGGED_USER, CLEAR_LOGGED_USER } from "./auth.constants";

const initialState = {
  loggedUser: null,
};

const loggedUserReducer = (state = initialState.loggedUser, action) => {
  if (action.type === STORE_LOGGED_USER) {
    return action.payload;
  } else if (action.type === CLEAR_LOGGED_USER) {
    return null;
  }
  return state;
};

export const authReducer = combineReducers({
  loggedUser: loggedUserReducer,
});
