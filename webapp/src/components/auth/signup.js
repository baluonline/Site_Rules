import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import signup from "..//..//images/signup.jpg";

import { userSignup } from "../_actions/userAuth";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    selectedRole: "Guest",
    roles: ["Guest", "Elite", "Admin"],
  });
  const [submitted, setSubmitted] = useState(false);
  const [enabledSubmitted, setEnabledSubmitted] = useState(false);
  const [signupError, setSignupError] = useState(null);

  const {
    fullname,
    emailAddress,
    password,
    confirmPassword,
    roles,
    selectedRole,
  } = inputs;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const checkPassword = (password) => {
    if (password.lenght >= 8) {
      setEnabledSubmitted(true);
      return true;
    } else {
      setEnabledSubmitted(false);
      return false;
    }
  };
  /*   const renderRolesList = (roles) => {
    roles.map((role) => {
      return (
        <option key={role} value={role}>
          {role}
        </option>
      );
    });
  }; */

  const handleSignup = (e) => {
    e.preventDefault();
    const data = {
      email: emailAddress,
      password: password,
      name: fullname,
      role: selectedRole,
    };
    setSubmitted(true);
    userSignup(data)
      .then((resp) => {
        dispatch({ type: resp.type, payload: resp.payload });
        setInputs((inputs) => ({ ...inputs, fullname: "" }));
        setInputs((inputs) => ({ ...inputs, emailAddress: "" }));
        setInputs((inputs) => ({ ...inputs, password: "" }));
        history.push("/products");
      })
      .catch((err) => {
        console.log("signup failed" + err);
        setSignupError(err.response.data.message);
      });
  };

  return (
    <div className="signup-page col-12">
      <form name="form" className="col-6 signup-form" onSubmit={handleSignup}>
        {signupError ? (
          <div className="alert alert-danger" role="alert">
            <p className="col-12">Error message : {signupError}</p>
          </div>
        ) : (
          ""
        )}
        <p className="title font-weight-bold">Sign up form here</p>
        <div className="input-group mb-10">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !fullname ? "is-invalid" : "")
            }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="input-group required">
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={emailAddress}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !emailAddress ? "is-invalid" : "")
            }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="input-group required">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="off"
            className={
              "form-control" + (submitted && !password ? "is-invalid" : "")
            }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="input-group required">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            autoComplete="off"
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !confirmPassword ? "is-invalid" : "")
            }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="input-group ">
          <select
            className="form-control"
            aria-label="Select Role"
            name="selectedRole"
            value={selectedRole}
            label="Select Role"
            onChange={handleChange}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className=" col-6 form-group signup-btn-container">
          <button className="col-10 btn btn-primary signup-btn" type="submit">
            Submit
          </button>
        </div>
        <div className=" col-12 form-group signup-btn-container">
          Already a member?
          <Link
            to="/signin"
            className="signup-btn-container"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
