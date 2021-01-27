
export const loginAPI = (data) => ({
  uri: "/api/auth/login",
  method: "post",
  data,
});

export const registerAPI = (data) => ({
  uri: "/users/register",
  method: "post",
  data,
});

export const loggedUserDataAPI = () => ({
  uri: "/api/user",
  method: "get",
});
