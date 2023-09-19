import React from "react";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Dash from "./Pages/AdminDash/index";
import Agent from "./Pages/AgentDash/index";
import { useSelector, useDispatch } from "react-redux";
import Request from "./Utils/Requests";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      if (localStorage.token) {
        getCurrentUser(localStorage.token);
      } else {
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      }
    },
    // eslint0diable-next-line
    []
  );
  const getCurrentUser = (token) => {
    Request.AuthUser(token)
      .then((res) => {
        dispatch({ type: "SET_USER", payload: res.user });
        setIsLoading(false);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        setIsLoading(false);
      });
  };
  return isLoading ? (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center p-5 "
    >
      <div class="spinner spinner-primary spinner-lg"></div>
    </div>
  ) : Auth.userAuth ? (
    Auth.data.role === "admin" || Auth.data.role === "user" ? (
      <Dash />
    ) : Auth.data.role === "agent" ? (
      <Agent />
    ) : (
      <Login />
    )
  ) : (
    <Login />
  );
}
export default App;
