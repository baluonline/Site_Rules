import { userConstants } from "../_constants";
import { useReducer } from "react";
import axios from "axios";
const basePath = "http://localhost:4000/auth/";
const initialState = { userToken: null };

const userAuth = (username, password) => {
  return axios
    .put(
      basePath + "login",
      {
        email: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      console.log(res.data.token);
      return { type: userConstants.USER_TOKEN, payload: res.data.token };
    })
    .catch((err) => {
      localStorage.setItem("token", null);
      localStorage.setItem("userId", null);
      console.log(err);
    });
};

export default userAuth;
