import { createSelector } from "reselect";

const _selectRegistrationFormValues = (state) => ({
  name: state.registrationForm.userInfo.name,
  lastname: state.registrationForm.userInfo.lastname,
  email: state.registrationForm.userInfo.email,
  username: state.registrationForm.userInfo.username,
  password: state.registrationForm.userInfo.password,
  passwordConfirmation: state.registrationForm.userInfo.passwordConfirmation,
  birthDate: state.registrationForm.userInfo.birthDate,
});

const _selectName = (state) => state.registrationForm.userInfo.name;
const _selectLastname = (state) => state.registrationForm.userInfo.lastname;
const _selectEmail = (state) => state.registrationForm.userInfo.email;
const _selectUsername = (state) => state.registrationForm.userInfo.username;
const _selectPassword = (state) => state.registrationForm.userInfo.password;
const _selectPasswordConfirmation = (state) =>
  state.registrationForm.userInfo.passwordConfirmation;
const _selectBirthDate = (state) => state.registrationForm.userInfo.birthDate;

export const selectRegistrationName = createSelector(
  _selectName,
  (value) => value
);

export const selectRegistrationLastname = createSelector(
  _selectLastname,
  (value) => value
);

export const selectRegistrationEmail = createSelector(
  _selectEmail,
  (value) => value
);

export const selectRegistrationUsername = createSelector(
  _selectUsername,
  (value) => value
);

export const selectRegistrationPassword = createSelector(
  _selectPassword,
  (value) => value
);

export const selectRegistrationPasswordConfirmation = createSelector(
  _selectPasswordConfirmation,
  (value) => value
);

export const selectRegistrationBirthDate = createSelector(
  _selectBirthDate,
  (value) => value
);

export const selectRegistrationFormValues = createSelector(
  _selectRegistrationFormValues,
  (value) => value
);
