import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/index";

import Request from "./Utils/Requests";
// import cogoToast from "cogo-toast";
// const getCurrentUser = (token) => {
//   Request.AuthUser(token)
//     .then((res) => {
//       console.log(res, "response");
//       Store.dispatch({ type: "SET_USER", payload: res.user });
//     })
//     .catch((err) => {
//       cogoToast.error(err.messsage, { position: "top-right", hideAfter: 5 });
//     });
// };
// if (localStorage.token) {
//   getCurrentUser(localStorage.token);
//   // store.dispatch(getCurrentUser());
// }
ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
