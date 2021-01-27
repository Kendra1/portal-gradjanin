import * as constants from './snackbar.constants';

export const storeSnackbarMessages = (payload) => ({
  type: constants.STORE_SNACKBAR_MESSAGES,
  payload,
});

export const clearSnackbarMessages = () => ({
  type: constants.CLEAR_SNACKBAR_MESSAGES,
});
