import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormItem } from "../common/FormItem";

import * as selectors from "../../app/registration-form/values/registration-values.selectors";
import { selectIsLoading } from "../../app/registration-form/registration-form.selectors";
import * as actions from "../../app/registration-form/values/registration-values.actions";
import * as errorSelectors from "../../app/registration-form/errors/registration-errors.selectors";

import { Grid, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import EventIcon from "@material-ui/icons/Event";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectors.selectRegistrationName);
  const lastname = useSelector(selectors.selectRegistrationLastname);
  const email = useSelector(selectors.selectRegistrationEmail);
  const username = useSelector(selectors.selectRegistrationUsername);
  const password = useSelector(selectors.selectRegistrationPassword);
  const passwordConfirmation = useSelector(
    selectors.selectRegistrationPasswordConfirmation
  );
  const birthDate = useSelector(selectors.selectRegistrationBirthDate);
  const isLoading = useSelector(selectIsLoading);

  const handleNameChange = (event) => {
    dispatch(actions.changeName(event.target.value));
  };

  const handleLastnameChange = (event) => {
    dispatch(actions.changeLastname(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(actions.changeEmail(event.target.value));
  };

  const handleUsernameChange = (event) => {
    dispatch(actions.changeUsername(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(actions.changePassword(event.target.value));
  };

  const handlePasswordConfirmationChange = (event) => {
    dispatch(actions.changePasswordConfirmation(event.target.value));
  };

  const handleBirthDateChange = (event) => {
    dispatch(actions.changeBirthDate(event.target.value));
  };

  const submit = (event) => {
    event.preventDefault();

    dispatch(actions.submitRegistrationForm());
  };

  return (
    <form onSubmit={submit}>
      <FormItem
        label={"Name"}
        value={name}
        handleValueChange={handleNameChange}
        selector={errorSelectors.selectNameFieldErrors}
        Icon={PersonIcon}
      />
      <FormItem
        label={"Lastame"}
        value={lastname}
        handleValueChange={handleLastnameChange}
        selector={errorSelectors.selectLastnameFieldErrors}
        Icon={PersonIcon}
      />
      <FormItem
        label={"Email"}
        value={email}
        handleValueChange={handleEmailChange}
        selector={errorSelectors.selectEmailFieldErrors}
        Icon={EmailIcon}
      />
      <FormItem
        label={"Username"}
        value={username}
        handleValueChange={handleUsernameChange}
        selector={errorSelectors.selectUsernameFieldErrors}
        Icon={PersonIcon}
      />
      <FormItem
        label={"Password"}
        value={password}
        handleValueChange={handlePasswordChange}
        selector={errorSelectors.selectPasswordFieldErrors}
        Icon={LockIcon}
      />
      <FormItem
        label={"Password Confirmation"}
        value={passwordConfirmation}
        handleValueChange={handlePasswordConfirmationChange}
        selector={errorSelectors.selectPasswordConfirmationFieldErrors}
        Icon={LockIcon}
      />
      <FormItem
        label={"Birth Date"}
        value={birthDate}
        handleValueChange={handleBirthDateChange}
        selector={errorSelectors.selectBirthDateFieldErrors}
        Icon={EventIcon}
      />
      <Grid item>
        <Grid item>
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="secondary"
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
