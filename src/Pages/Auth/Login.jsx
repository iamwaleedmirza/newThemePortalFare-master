import React, { useState } from "react";
import bgImage from "../../media/bg/bg-2.jpg";
import logo from "../../media/logos/logo-letter-13.png";
// import ForgetPass from "./ForgetPassword";
import Requests from "../../Utils/Requests";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { setAuth } from "../../Redux/Auth/AuthActions";
import cogoToast from "cogo-toast";
const Login = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setErrors] = useState({
    username: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const onInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors({
      username: "",
      password: "",
    });
  };
  const onSubmit = () => {
    // props.history.push("/dashboard");
    if (data.username === null || data.username === "") {
      setErrors({
        ...error,
        userName: "user name is required",
      });
    } else if (data.password === null || data.password === "") {
      setErrors({
        username: "",
        password: "Password  is required",
      });
    } else {
      setLoader(true);
      setErrors({
        username: "",
        password: "",
      });

      Requests.login(
        JSON.stringify({ userName: data.username, password: data.password })
      )
        .then((res) => {
          localStorage.setItem("token", res.token);
          props.SetAuth(res.user);
          setLoader(false);
        })
        .catch((err) => {
          cogoToast.error(err.message, { position: "top-right", hideAfter: 6 });
          setLoader(false);
        });
    }
  };
  return (
    <>
      <div className="d-flex flex-column flex-root" style={{ height: "100vh" }}>
        {/* <!--begin::Login--> */}
        <div
          className="login login-5 login-signin-on d-flex flex-row-fluid"
          id=""
        >
          <div
            className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="login-form text-center text-white p-7 position-relative overflow-hidden">
              {/* <!--begin::Login Header--> */}
              <div className="d-flex flex-center mb-15">
                <a href="#">
                  <img src={logo} className="max-h-75px" alt="" />
                </a>
              </div>
              {/* <!--end::Login Header--> */}
              {/* <!--begin::Login Sign in form--> */}
              <div className="login-signin">
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">Sign In</h3>
                  <p className="opacity-40">
                    Enter your details to login to your account:
                  </p>
                </div>
                <form
                  className="form fv-plugins-bootstrap fv-plugins-framework"
                  id="kt_login_signin_form"
                  novalidate="novalidate"
                >
                  <div className="form-group fv-plugins-icon-container has-success">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 is-valid"
                      type="text"
                      placeholder="User name"
                      name="username"
                      autocomplete="off"
                      onChange={onInputChange}
                      value={data.username}
                    />
                    {error.username.length ? (
                      <div class="fv-help-block">{error.userName}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group fv-plugins-icon-container has-success">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 is-valid"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={onInputChange}
                    />
                    {error.password.length ? (
                      <div class="fv-help-block">{error.password}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60">
                    {/* <div className="checkbox-inline">
                      <label className="checkbox checkbox-outline checkbox-white text-white m-0">
                        <input type="checkbox" name="remember" />
                        <span></span>Remember me
                      </label>
                    </div> */}
                    <a
                      href="javascript:;"
                      id="kt_login_forgot"
                      className="text-white font-weight-bold text-center cursor-pointer"
                    >
                      Forget Password ?
                    </a>
                  </div>
                  <div className="form-group text-center mt-10">
                    {loader ? (
                      <button
                        type="button"
                        onClick={onSubmit}
                        //   id="kt_login_signin_submit"
                        className="btn btn-pill btn-primary opacity-90 px-15 py-3 spinner spinner-white spinner-right disabled"
                      >
                        loading...
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onSubmit}
                        //   id="kt_login_signin_submit"
                        className="btn btn-pill btn-primary opacity-90 px-15 py-3"
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                  <input type="hidden" />
                  <div></div>
                </form>
              </div>
              {/* <ForgetPass /> */}
              <div className="login-forgot">
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">
                    Forgotten Password ?
                  </h3>
                  <p className="opacity-40">
                    Enter your email to reset your password
                  </p>
                </div>
                <form
                  className="form fv-plugins-bootstrap fv-plugins-framework"
                  id="kt_login_forgot_form"
                >
                  <div className="form-group mb-10 fv-plugins-icon-container">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                    />
                    <div className="fv-plugins-message-container"></div>
                  </div>
                  <div className="form-group">
                    <button
                      id="kt_login_forgot_submit"
                      className="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2"
                    >
                      Request
                    </button>
                    <button
                      id="kt_login_forgot_cancel"
                      className="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2"
                    >
                      Cancel
                    </button>
                  </div>
                  <div></div>
                </form>
              </div>

              {/* <!--end::Login Sign in form--> */}
              {/* <!--begin::Login Sign up form--> */}
              {/* <div className="login-signup">
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">Sign Up</h3>
                  <p className="opacity-40">
                    Enter your details to create your account
                  </p>
                </div>
                <form
                  className="form text-center fv-plugins-bootstrap fv-plugins-framework"
                  id="kt_login_signup_form"
                >
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Fullname"
                      name="fullname"
                    />
                    <div className="fv-plugins-message-container"></div>
                  </div>
                  <div className="form-group fv-plugins-icon-container has-danger">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 is-invalid"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                    />
                    <div className="fv-plugins-message-container">
                      <div
                        data-field="email"
                        data-validator="emailAddress"
                        className="fv-help-block"
                      >
                        The value is not a valid email address
                      </div>
                    </div>
                  </div>
                  <div className="form-group fv-plugins-icon-container has-success">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 is-valid"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <div className="fv-plugins-message-container"></div>
                  </div>
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="password"
                      placeholder="Confirm Password"
                      name="cpassword"
                    />
                    <div className="fv-plugins-message-container"></div>
                  </div>
                  <div className="form-group text-left px-8 fv-plugins-icon-container">
                    <div className="checkbox-inline">
                      <label className="checkbox checkbox-outline checkbox-white opacity-60 text-white m-0">
                        <input type="checkbox" name="agree" />
                        <span></span>I Agree the
                        <a
                          href="#"
                          className="text-white font-weight-bold ml-1"
                        >
                          terms and conditions
                        </a>
                        .
                      </label>
                    </div>
                    <div className="form-text text-muted text-center"></div>
                    <div className="fv-plugins-message-container"></div>
                  </div>
                  <div className="form-group">
                    <button
                      id="kt_login_signup_submit"
                      className="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2"
                    >
                      Sign Up
                    </button>
                    <button
                      id="kt_login_signup_cancel"
                      className="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2"
                    >
                      Cancel
                    </button>
                  </div>
                  <div></div>
                </form>
              </div> */}
              {/* <!--end::Login Sign up form-->
						<!--begin::Login forgot password form--> */}

              {/* <!--end::Login forgot password form--> */}
            </div>
          </div>
        </div>
        {/* <!--end::Login--> */}
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    SetAuth: (data) => dispatch(setAuth(data)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
