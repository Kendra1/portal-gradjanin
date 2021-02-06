export const persistLoggedUser = (user) => {
  localStorage.setItem("logged_user", JSON.stringify(user));
};

export const persistLoggedUsersData = (loggedUserData) => {
  localStorage.setItem("logged_user_data", JSON.stringify(loggedUserData));
};

export const abandonLoggedUser = () => {
  localStorage.removeItem("logged_user");
  localStorage.removeItem("logged_user_data");
};

export const readLoggedUser = () => {
  try {
    const user = localStorage.getItem("logged_user");
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

export const readLoggedUserData = () => {
  try {
    const user = localStorage.getItem("logged_user_data");
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};
