import { SETUSER, SETUSEROUT } from "./AuthContants";

const INITIAL_STATE = {
  data: "",
  userAuth: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        ...state,
        data: action.payload,
        userAuth: true,
      };
    case SETUSEROUT:
      return {
        ...state,
        data: "",
        userAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
