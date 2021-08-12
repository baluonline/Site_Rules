import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "..//_actions/userAuth";
import { userConstants } from "../_constants/";

const Signout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    userLogout()
      .then((res) => {
        console.log("header response " + res);
        dispatch({ type: userConstants.USER_TOKEN, data: res.data.userToken });
        dispatch({ type: userConstants.USER_ID, data: res.data.userId });
        history.push("/signin");
      })
      .catch((err) => console.log("logout failed"));
  };
  return (
    <ul className="navbar-nav mr-auto my-2 my-lg-0 col-lg-3">
      <li className="col-lg-4"></li>
      <li className="nav-item col-lg-4">
        <button type="button" className="btn nav-link" onClick={logout}>
          Signout
        </button>
      </li>
    </ul>
  );
};

export default Signout;
