import { combineReducers } from "redux";

import * as constants from "./registration-values.constants";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  birthDate: "",
};

const _nameReducer = (
  state = initialState.name,
  action
) => {
  if (action.type === constants.STORE_NAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_NAME) {
    return "";
  }
  return state;
};

const _lastnameReducer = (
  state = initialState.lastname,
  action
) => {
  if (action.type === constants.STORE_LASTNAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_LASTNAME) {
    return "";
  }
  return state;
};

const _emailReducer = (
  state = initialState.email,
  action
) => {
  if (action.type === constants.STORE_EMAIL) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL) {
    return "";
  }
  return state;
};

const _usernameReducer = (
  state = initialState.username,
  action
) => {
  if (action.type === constants.STORE_USERNAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_USERNAME) {
    return "";
  }
  return state;
};

const _passwordReducer = (
  state = initialState.password,
  action
) => {
  if (action.type === constants.STORE_PASSWORD) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD) {
    return "";
  }
  return state;
};

const _passwordConfirmationReducer = (
  state = initialState.passwordConfirmation,
  action
) => {
  if (action.type === constants.STORE_PASSWORD_CONFIRMATION) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_CONFIRMATION) {
    return "";
  }
  return state;
};

const _birthDateReducer = (
  state = initialState.birthDate,
  action
) => {
  if (action.type === constants.STORE_BIRTH_DATE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_BIRTH_DATE) {
    return "";
  }
  return state;
};

export const registrationFormValuesReducer = combineReducers({
  name: _nameReducer,
  lastname: _lastnameReducer,
  email: _emailReducer,
  username: _usernameReducer,
  password: _passwordReducer,
  passwordConfirmation: _passwordConfirmationReducer,
  birthDate: _birthDateReducer,
});
