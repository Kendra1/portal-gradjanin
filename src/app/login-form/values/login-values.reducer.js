import { combineReducers } from 'redux';
import * as constants from './login-values.constants';

const initialState = {
  email: '',
  password: '',
};

const _emailReducer = (
  state = initialState.email,
  action,
) => {
  if (action.type === constants.STORE_EMAIL_VALUE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL_VALUE) {
    return '';
  }
  return state;
};

const _passwordReducer = (
  state = initialState.password,
  action,
) => {
  if (action.type === constants.STORE_PASSWORD_VALUE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_VALUE) {
    return '';
  }
  return state;
};

export const loginFormValuesReducer = combineReducers({
  email: _emailReducer,
  password: _passwordReducer,
});
