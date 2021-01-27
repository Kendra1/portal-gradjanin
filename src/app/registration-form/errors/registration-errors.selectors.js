import { createSelector } from "reselect";

const _selectNameFieldErrors = (state) =>
  state.registrationForm.errors.nameErrors;
const _selectLastnameFieldErrors = (state) =>
  state.registrationForm.errors.lastnameErrors;
const _selectEmailFieldErrors = (state) =>
  state.registrationForm.errors.emailErrors;
const _selectUsernameFieldErrors = (state) =>
  state.registrationForm.errors.usernameErrors;
const _selectPasswordFieldErrors = (state) =>
  state.registrationForm.errors.passwordErrors;
const _selectPasswordConfirmationFieldErrors = (state) =>
  state.registrationForm.errors.passwordConfirmationErrors;
const _selectBirthDateFieldErrors = (state) =>
  state.registrationForm.errors.birthDateErrors;

export const selectNameFieldErrors = createSelector(
  _selectNameFieldErrors,
  (value) => value
);

export const selectLastnameFieldErrors = createSelector(
  _selectLastnameFieldErrors,
  (value) => value
);

export const selectEmailFieldErrors = createSelector(
  _selectEmailFieldErrors,
  (value) => value
);

export const selectUsernameFieldErrors = createSelector(
  _selectUsernameFieldErrors,
  (value) => value
);

export const selectPasswordFieldErrors = createSelector(
  _selectPasswordFieldErrors,
  (value) => value
);

export const selectPasswordConfirmationFieldErrors = createSelector(
  _selectPasswordConfirmationFieldErrors,
  (value) => value
);

export const selectBirthDateFieldErrors = createSelector(
  _selectBirthDateFieldErrors,
  (value) => value
);
