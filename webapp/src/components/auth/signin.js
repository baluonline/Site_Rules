import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSign = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <form name="form" onSubmit={handleSign}>
        <h3>Signin</h3>
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !username ? "is-invalid" : "")
            }
            placeholder="Please enter your username"
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Pleas enter your password here"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          <Link to="/signup" className="btn btn-link">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
