import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { RegistrationForm } from "../registration/RegistrationForm";

import { Grid, Container, Link } from "@material-ui/core";

import { usePageStyle } from "../../assets/styles/page";

export const RegistrationPage = () => {
  const pageClasses = usePageStyle();

  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid container direction="column" className={pageClasses.gridContainer}>
        <RegistrationForm />
        <Grid item>
          <Link component={RouterLink} to="/login" className={pageClasses.link}>
            Already have an account?
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
