import axios from "axios";

export const log = (data, props) => {
  const fun = () => {
    return { type: "login" };
  };
  return (dispatch) => {
    axios
      .post(" https://dct-billing-app.herokuapp.com/api/users/login", data)
      .then((response) => {
        const result = response.data;
        localStorage.setItem("token", result.token);
        dispatch(fun());
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: "logout" };
};
