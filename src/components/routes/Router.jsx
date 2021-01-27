import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { RegistrationPage } from "../pages/RegistrationPage";
import { NavBar } from "../common/NavBar";

import "../../assets/styles/index.css";
import Dashboard from '../pages/Dashboard';

export const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <PublicOnlyRoute path="/login" component={LoginPage} />
      <PublicOnlyRoute path="/registration" component={RegistrationPage} />
      <PublicOnlyRoute path="/dashboard" component={Dashboard} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
