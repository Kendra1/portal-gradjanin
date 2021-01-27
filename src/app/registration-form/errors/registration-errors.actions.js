import * as constants from "./registration-errors.constants";

export const storeNameErrors = (
  payload
) => ({
  type: constants.STORE_NAME_ERRORS,
  payload,
});

export const storeLastnameErrors = (
  payload
) => ({
  type: constants.STORE_LASTNAME_ERRORS,
  payload,
});

export const storeEmailErrors = (
  payload
) => ({
  type: constants.STORE_EMAIL_ERRORS,
  payload,
});

export const storeUserameErrors = (
  payload
) => ({
  type: constants.STORE_USERNAME_ERRORS,
  payload,
});

export const storePasswordErrors = (
  payload
) => ({
  type: constants.STORE_PASSWORD_ERRORS,
  payload,
});

export const storePasswordconfirmationErrors = (
  payload
) => ({
  type: constants.STORE_PASSWORD_CONFIRMATION_ERRORS,
  payload,
});

export const storeBirthDaterrors = (
  payload
) => ({
  type: constants.STORE_BIRTH_DATE_ERRORS,
  payload,
});

export const clearNameErrors = () => ({
  type: constants.CLEAR_NAME_ERRORS,
});

export const clearLastnameErrors = () => ({
  type: constants.CLEAR_LASTNAME_ERRORS,
});

export const clearEmailErrors = () => ({
  type: constants.CLEAR_EMAIL_ERRORS,
});

export const clearUsernameErrors = () => ({
  type: constants.CLEAR_USERNAME_ERRORS,
});

export const clearPasswordErrors = () => ({
  type: constants.CLEAR_PASSWORD_ERRORS,
});

export const clearPasswordConfirmationErrors = () => ({
  type: constants.CLEAR_PASSWORD_CONFIRMATION_ERRORS,
});

export const clearBirthDateErrors = () => ({
  type: constants.CLEAR_BIRTH_DATE_ERRORS,
});
