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

  const sendRequest = () => {
    history.push("sendRequest");
  };

  const myRequests = () => {
    history.push("citizenDashboard");
  };

  const myInformation = () => {
    history.push("myInformation");
  };

  const requests = () => {
    history.push("");
  };

  const requestAnswers = () => {
    history.push("requestAnswers");
  };

  const allInformation = () => {
    history.push("information");
  };

  const searchRequests = () => {
    history.push("searchRequests");
  };

  const searchRequestsAdvanced = () => {
    history.push("advancedSearchRequests");
  };

  return (
    <AppBar position='static' className={navbarStyle.navbar}>
      <Toolbar>
        {loggedUser ? (
          <>
            {loggedUser && loggedUser.role === "ROLE_GRADJANIN" ? (
              <>
                <Button color='inherit' onClick={sendRequest}>
                  Send Request
                </Button>
                <Button color='inherit' onClick={myRequests}>
                  My Requests
                </Button>
                <Button color='inherit' onClick={myInformation}>
                  My Information
                </Button>
              </>
            ) : (
              <>
                <Button color='inherit' onClick={requests}>
                  Requests
                </Button>
                <Button color='inherit' onClick={searchRequests}>
                  Search requests
                </Button>
                <Button color='inherit' onClick={searchRequestsAdvanced}>
                  Search requests - Advanced
                </Button>
                <Button color='inherit' onClick={requestAnswers}>
                  Request Answers
                </Button>
                <Button color='inherit' onClick={allInformation}>
                  INFORMATION
                </Button>
              </>
            )}
            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color='inherit' onClick={login}>
              Login
            </Button>
            <Button color='inherit' onClick={registrate}>
              Registrate
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
