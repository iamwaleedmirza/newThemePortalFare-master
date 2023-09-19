import React from "react";

const ForgetPassword = () => {
  return (
    <>
      <div className="login-forgot">
        <div className="mb-20">
          <h3 className="opacity-40 font-weight-normal">
            Forgotten Password ?
          </h3>
          <p className="opacity-40">Enter your email to reset your password</p>
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
    </>
  );
};

export default ForgetPassword;
