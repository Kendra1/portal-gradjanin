import { combineReducers } from "redux";

import * as constants from "./registration-errors.constants";

const initialState = {
  nameErrors: [],
  lastnameErrors: [],
  emailErrors: [],
  usernameErrors: [],
  passwordErrors: [],
  passwordConfirmationErrors: [],
  birthDateErrors: [],
};

const _nameErrorsReducer = (
  state = initialState.nameErrors,
  action
) => {
  if (action.type === constants.STORE_NAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_NAME_ERRORS) {
    return [];
  }
  return state;
};

const _lastnameErrorsReducer = (
  state = initialState.lastnameErrors,
  action
) => {
  if (action.type === constants.STORE_LASTNAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_LASTNAME_ERRORS) {
    return [];
  }
  return state;
};

const _emailErrorsReducer = (
  state = initialState.emailErrors,
  action
) => {
  if (action.type === constants.STORE_EMAIL_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL_ERRORS) {
    return [];
  }
  return state;
};

const _usernameErrorsReducer = (
  state = initialState.usernameErrors,
  action
) => {
  if (action.type === constants.STORE_USERNAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_USERNAME_ERRORS) {
    return [];
  }
  return state;
};

const _passwordErrorsReducer = (
  state = initialState.passwordErrors,
  action
) => {
  if (action.type === constants.STORE_PASSWORD_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_ERRORS) {
    return [];
  }
  return state;
};

const _passwordConfirmationErrorsReducer = (
  state = initialState.passwordConfirmationErrors,
  action
) => {
  if (action.type === constants.STORE_PASSWORD_CONFIRMATION_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_CONFIRMATION_ERRORS) {
    return [];
  }
  return state;
};

const _birthDateErrorsReducer = (
  state = initialState.birthDateErrors,
  action
) => {
  if (action.type === constants.STORE_BIRTH_DATE_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_BIRTH_DATE_ERRORS) {
    return [];
  }
  return state;
};

export const registrationFormErrorsReducer = combineReducers({
  nameErrors: _nameErrorsReducer,
  lastnameErrors: _lastnameErrorsReducer,
  emailErrors: _emailErrorsReducer,
  usernameErrors: _usernameErrorsReducer,
  passwordErrors: _passwordErrorsReducer,
  passwordConfirmationErrors: _passwordConfirmationErrorsReducer,
  birthDateErrors: _birthDateErrorsReducer,
});
