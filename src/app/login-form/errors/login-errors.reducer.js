import { combineReducers } from 'redux';

import * as constants from './login-errors.constants';

const initialState = {
  emailErrors: [],
  passwordErrors: [],
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

const _passwordErorrsReducer = (
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

export const loginFormErrorsReducer = combineReducers({
  emailErrors: _emailErrorsReducer,
  passwordErrors: _passwordErorrsReducer,
});
