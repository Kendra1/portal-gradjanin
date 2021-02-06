import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { NavBar } from "../common/NavBar";
import { SingleRequest } from "../pages/SingleRequest";
import { SendRequest } from "../pages/SendRequest";
import { HandleRequest } from "../pages/HandleRequest";
import { RedirectComponent } from "../common/RedirectComponent";
import { RespondToRequest } from "../pages/RespondToRequest";
import { XHTMLPage } from "../pages/XHTMLPage";
import { PDFPage } from "../pages/PDFPage";
import { CitizenInformation } from "../pages/CitizenInformation";
import { Information } from "../pages/Information";

import "../../assets/styles/index.css";
import { SingleInformation } from "../pages/SingleInformation";

export const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <PublicOnlyRoute path='/login' component={LoginPage} />
      <PublicOnlyRoute path='/registration' component={RegistrationPage} />
      <PrivateRoute path='/sendRequest' component={SendRequest} />
      <PrivateRoute path='/singleRequest' component={SingleRequest} />
      <PrivateRoute path='/handleRequest' component={HandleRequest} />
      <PrivateRoute path='/respondToRequest' component={RespondToRequest} />
      <PrivateRoute path='/information' component={Information} />
      <PrivateRoute path='/myInformation' component={CitizenInformation} />
      <PrivateRoute path='/pdf-export' component={PDFPage} />
      <PrivateRoute path='/xhtml-export' component={XHTMLPage} />
      <PrivateRoute path='/singleInformation' component={SingleInformation} />
      <PrivateRoute path='/' component={RedirectComponent} />
    </Switch>
  </BrowserRouter>
);
