import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Initializer } from "./Initializer";
import { SnackbarMessages } from "./components/common/SnackbarMessages";
import { Router } from "./components/routes/Router";
import { configureStore } from "./app/store";
import { theme } from "./assets/styles/theme";

export const App = () => (
  <Provider store={configureStore()}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Initializer>
        <Router />
      </Initializer>
      <SnackbarMessages />
    </ThemeProvider>
  </Provider>
);
