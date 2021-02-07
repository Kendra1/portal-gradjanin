import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSnackbarMessages } from "../../app/snackbar/snackbar.selectors";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { clearSnackbarMessages } from "../../app/snackbar/snackbar.actions";

export const SnackbarMessages = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectSnackbarMessages);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearSnackbarMessages());
  };

  return (
    <>
      {messages.length
        ? messages.map((message, id) => {
            return (
              <Snackbar
                key={`message_${id}`}
                open={!!messages.length}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert severity={message.type} variant='filled'>
                  {message.message}
                </Alert>
              </Snackbar>
            );
          })
        : null}
    </>
  );
};
