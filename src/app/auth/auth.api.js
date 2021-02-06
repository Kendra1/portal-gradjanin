export const loginAPI = (data) => {
  return {
    uri: "/api/auth/login",
    method: "post",
    data,
  };
};

export const registerAPI = (data) => ({
  uri: "/api/auth/register",
  method: "post",
  data,
});

export const loggedUserDataAPI = () => ({
  uri: "/api/user",
  method: "get",
});
