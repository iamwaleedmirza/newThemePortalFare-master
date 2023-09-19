import { combineReducers } from "redux";

import AuthReducer from "./Auth/index";

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export default rootReducer;
