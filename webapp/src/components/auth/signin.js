import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Mailbox } from "react-bootstrap-icons";

import userAuth from "../_actions/userAuth";
import { fetchUsers } from "../_actions/fetchUser";
import login from "../../images/ForLogin.png";
const Signin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSign = (e) => {
    e.preventDefault();
    setSubmitted(true);
    userAuth(username, password).then((resp) => {
      dispatch({ type: resp.type, payload: resp.payload });
      setInputs((inputs) => ({ ...inputs, username: "" }));
      setInputs((inputs) => ({ ...inputs, password: "" }));
    });
  };
  return (
    <div className="col-12 signin-page">
      <img className="col-6 forlogin-img" src={login} alt="For Login" />
      <div className="col-1"></div>
      <form
        name="form"
        className="col-3 signin-container"
        onSubmit={(e) =>
          handleSign(e, {
            username,
            password,
          })
        }
      >
        <h3 className="col-12">Signin</h3>
        <div className="input-group mb-10">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "signin-inputs form-control " +
              (submitted && !username ? "is-invalid" : "")
            }
            placeholder="Username/Email"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-user-circle-o"></i>
            </span>
          </div>
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Pleas enter your password here"
            value={password}
            onChange={handleChange}
            className={
              "signin-inputs form-control" +
              (submitted && !password ? " is-invalid" : "")
            }
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group login-button-container col-12">
          <button className="btn btn-primary col-10 login-btn">Login</button>
        </div>
        <div className="col-12 form-group login-button-container">
          Note a member?
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
             Signup
          </Link>
        </div>
      </form>
      <div className="col-1"></div>
    </div>
  );
};

export default Signin;
