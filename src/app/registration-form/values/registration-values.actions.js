import * as constants from "./registration-values.constants";

export const storeName = (payload) => ({
  type: constants.STORE_NAME,
  payload,
});

export const storeLastname = (payload) => ({
  type: constants.STORE_LASTNAME,
  payload,
});

export const storeEmail = (payload) => ({
  type: constants.STORE_EMAIL,
  payload,
});

export const storeUsername = (payload) => ({
  type: constants.STORE_USERNAME,
  payload,
});

export const storePassword = (payload) => ({
  type: constants.STORE_PASSWORD,
  payload,
});

export const storePasswordConfirmation = (
  payload
) => ({
  type: constants.STORE_PASSWORD_CONFIRMATION,
  payload,
});

export const storeBirthDate = (
  payload
) => ({
  type: constants.STORE_BIRTH_DATE,
  payload,
});

export const clearName = () => ({
  type: constants.CLEAR_NAME,
});

export const clearLastname = () => ({
  type: constants.CLEAR_LASTNAME,
});

export const clearEmail = () => ({
  type: constants.CLEAR_EMAIL,
});

export const clearUsername = () => ({
  type: constants.CLEAR_USERNAME,
});

export const clearPassword = () => ({
  type: constants.CLEAR_PASSWORD,
});

export const clearPasswordConfirmation = () => ({
  type: constants.CLEAR_PASSWORD_CONFIRMATION,
});

export const clearBirthDate = () => ({
  type: constants.CLEAR_BIRTH_DATE,
});

export const changeName = (payload) => ({
  type: constants.CHANGE_NAME,
  payload,
});

export const changeLastname = (
  payload
) => ({
  type: constants.CHANGE_LASTNAME,
  payload,
});

export const changeEmail = (payload) => ({
  type: constants.CHANGE_EMAIL,
  payload,
});

export const changeUsername = (
  payload
) => ({
  type: constants.CHANGE_USERNAME,
  payload,
});

export const changePassword = (
  payload
) => ({
  type: constants.CHANGE_PASSWORD,
  payload,
});

export const changePasswordConfirmation = (
  payload
) => ({
  type: constants.CHANGE_PASSWORD_CONFIRMATION,
  payload,
});

export const changeBirthDate = (
  payload
) => ({
  type: constants.CHANGE_BIRTH_DATE,
  payload,
});

export const clearRegistrationForm = () => ({
  type: constants.CLEAR_REGISTRATION_FORM,
});

export const submitRegistrationForm = () => ({
  type: constants.SUBMIT_REGISTRATION_FORM,
});
