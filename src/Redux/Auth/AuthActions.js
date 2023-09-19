import { SETUSER, SETUSEROUT } from "./AuthContants";

export const setAuth = (data) => {
  return {
    type: SETUSER,
    payload: data,
  };
};
export const setAuthOut = () => {
  return {
    type: SETUSEROUT,
  };
};
