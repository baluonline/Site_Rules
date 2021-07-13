import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    emailAddress: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { fullname, emailAddress, username, password, confirmPassword } =
    inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const checkUserName = (username) => {
    return username.lenght >= 8;
  };
  const checkPassword = (password) => {
    return password.lenght >= 8;
  };
  const checkConfirmPassword = (confirmPassword, password) => {
    return password.lenght >= 8 && confirmPassword === password;
  };
  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form name="form" onSubmit={handleSignup}>
        <h3>Sign up form here </h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !fullname ? "is-invalid" : "")
            }
            placeholder="Please enter your full name"
          />
        </div>
        <div className="form-group required">
          <label className="control-label">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={emailAddress}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !emailAddress ? "is-invalid" : "")
            }
            placeholder="Please enter your email address"
          />
        </div>
        <div className="form-group required">
          <label className="control-label">User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !checkUserName(username) ? "is-invalid" : "")
            }
            placeholder="Please enter your user name"
          />
        </div>
        <div className="form-group required">
          <label className="control-label">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !checkPassword(password) ? "is-invalid" : "")
            }
            placeholder="Please enter your password"
          />
          {submitted && !checkUserName(password) && (
            <div className="invalid-feedback">
              Password should contain at least 8 chars
            </div>
          )}
        </div>
        <div className="form-group required">
          <label className="control-label">Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !checkPassword(confirmPassword) ? "is-invalid" : "")
            }
            placeholder="Confirm your password"
          />
          {submitted && !checkConfirmPassword(confirmPassword, password) && (
            <div className="invalid-feedback">
              Confirm password should match with password
            </div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
          
          <Link to="/signin" className="btn btn-link">
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
