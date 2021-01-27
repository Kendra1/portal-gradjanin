import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { LoginForm } from "../login/LoginForm";

import { Grid, Container, Link } from "@material-ui/core";

import { usePageStyle } from "../../assets/styles/page";

export const LoginPage = () => {
  const pageClasses = usePageStyle();

  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid container direction="column" className={pageClasses.gridContainer}>
        <LoginForm />
        <Grid item>
          <Link
            component={RouterLink}
            to="/registration"
            className={pageClasses.link}
          >
            Don't have an account?
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
