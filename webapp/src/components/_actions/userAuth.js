import { userConstants } from "../_constants";
import { useReducer } from "react";
import axios from "axios";
const basePath = "http://localhost:4000/auth/";
const initialState = { userToken: null };

export const userAuth = (username, password) => {
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
      localStorage.setItem("userId", res.data.userId);
      return { type: userConstants.USER_ID, payload: res.data.userId };
    })
    .catch((err) => {
      localStorage.setItem("userId", null);
      return { type: userConstants.USER_ID, payload: null };
    });
};

export const userSignup = (signupData) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(
        basePath + "signup",
        {
          email: signupData.email,
          password: signupData.password,
          name: signupData.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("userId", res.data.userId);
        return { type: userConstants.USER_ID, payload: res.data.userId };
      })
      .catch((err) => {
        localStorage.setItem("userId", null);
        reject(err);
        console.log(err);
      });
  });
};
