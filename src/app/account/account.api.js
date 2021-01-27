export const loggedUserAPI = () => ({
  uri: `/users/user`,
  method: "get",
});

export const saveUserDataAPI = (userData) => ({
  uri: `/api/user`,
  method: "patch",
  data: userData,
});