import React from "react";
import { CitizenDashboard } from "../pages/CitizenDashboard";
import { Dashboard } from "../pages/Dashboard";

export const RedirectComponent = () => {
  const loggedUser = JSON.parse(localStorage.getItem("logged_user"));
  return loggedUser.role === "ROLE_GRADJANIN" ? (
    <CitizenDashboard />
  ) : (
    <Dashboard />
  );
};
