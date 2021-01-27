import * as constants from './login-values.constants';

export const storeEmailValue = (payload) => ({
  type: constants.STORE_EMAIL_VALUE,
  payload,
});

export const clearEmailValue = () => ({
  type: constants.CLEAR_EMAIL_VALUE,
});

export const clearPasswordValue = () => ({
  type: constants.CLEAR_PASSWORD_VALUE,
});

export const storePasswordValue = (payload) => ({
  type: constants.STORE_PASSWORD_VALUE,
  payload,
});

export const clearLoginForm = () => ({
  type: constants.CLEAR_LOGIN_FORM,
});

export const submitLoginForm = () => ({
  type: constants.SUBMIT_LOGIN_FORM,
});

export const changeEmailValue = (payload) => ({
  type: constants.CHANGE_EMAIL_VALUE,
  payload,
});

export const changePasswordValue = (payload) => ({
  type: constants.CHANGE_PASSWORD_VALUE,
  payload,
});
