import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useNavbarStyle } from "../../assets/styles/navbar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../app/auth/auth.actions";
import { selectLoggedUser } from "../../app/auth/auth.selectors";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navbarStyle = useNavbarStyle();
  const history = useHistory();

  const loggedUser = useSelector(selectLoggedUser);

  const logout = () => {
    dispatch(logoutUser());
    history.push("login");
  };

  const login = () => {
    history.push("login");
  };

  const registrate = () => {
    history.push("registration");
  };

  return (
    <AppBar position="static" className={navbarStyle.navbar}>
      <Toolbar>
        {loggedUser ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={login}>
              Login
            </Button>
            <Button color="inherit" onClick={registrate}>
              Registrate
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
