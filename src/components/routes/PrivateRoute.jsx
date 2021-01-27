import React from 'react';
import { useSelector } from 'react-redux';

import { Redirect, Route } from 'react-router-dom';
import { selectLoggedUser } from '../../app/auth/auth.selectors'

export const PrivateRoute = (props) => {
  const loggedUser = useSelector(selectLoggedUser);

  if (!loggedUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route {...props} />
  )
}