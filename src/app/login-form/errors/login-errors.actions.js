import * as constants from './login-errors.constants';

export const storeEmailErrors = (payload) => ({
  type: constants.STORE_EMAIL_ERRORS,
  payload,
});

export const storePasswordErrors = (
  payload
) => ({
  type: constants.STORE_PASSWORD_ERRORS,
  payload,
});

export const clearEmailErrors = () => ({
  type: constants.CLEAR_EMAIL_ERRORS,
});

export const clearPasswordErrors = () => ({
  type: constants.CLEAR_PASSWORD_ERRORS,
});
