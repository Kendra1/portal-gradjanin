import { Reducer, combineReducers } from "redux";
import {
  STORE_LOGGED_USERS_DATA,
  CLEAR_LOGGED_USERS_DATA
} from "./account.constants";

const initialState = {
  loggedUsersData: null,
  recommendedCalories: null,
}

const loggedUserReducer = (
  state = initialState.loggedUsersData,
  action
) => {
  if (action.type === STORE_LOGGED_USERS_DATA) {
    return action.payload;
  } else if (action.type === CLEAR_LOGGED_USERS_DATA) {
    return state;
  }
  return state;
};


export const accountReducer = combineReducers({
  loggedUsersData: loggedUserReducer
});
