import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormItem } from "../common/FormItem";

import {
  selectEmail,
  selectPassword,
} from "../../app/login-form/values/login-values.selectors";
import { selectIsLoading } from "../../app/login-form/login-form.selectors";
import {
  changeEmailValue,
  changePasswordValue,
  submitLoginForm,
} from "../../app/login-form/values/login-values.actions";
import {
  selectPasswordFieldErrors,
  selectEmailFieldErrors,
} from "../../app/login-form/errors/login-errors.selectors";

import { Grid, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const isLoading = useSelector(selectIsLoading);

  const handleEmailChange = (event) => {
    dispatch(changeEmailValue(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(changePasswordValue(event.target.value));
  };

  const submit = (event) => {
    event.preventDefault();

    dispatch(submitLoginForm());
  };

  return (
    <form onSubmit={submit}>
      <FormItem
        label={"Email"}
        value={email}
        handleValueChange={handleEmailChange}
        selector={selectEmailFieldErrors}
        Icon={EmailIcon}
      />
      <FormItem
        label={"Password"}
        value={password}
        handleValueChange={handlePasswordChange}
        selector={selectPasswordFieldErrors}
        Icon={LockIcon}
      />
      <Grid item>
        <Grid item>
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="secondary"
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
