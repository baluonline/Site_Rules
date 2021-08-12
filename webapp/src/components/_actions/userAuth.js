import { userConstants } from "../_constants";
import { useReducer } from "react";
import axios from "axios";
const basePath = "http://localhost:4000/auth/";
const initialState = { userToken: null };

export const userAuth = (username, password) => {
  return new Promise((resolve, reject) => {
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
        localStorage.setItem("token", res.data.token);
        resolve({ type: userConstants.USER_ID, payload: res.data.userId });
        // return ;
      })
      .catch((err) => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        reject(err);
        return { type: userConstants.USER_ID, payload: null };
      });
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

export const userLogout = () => {
  return new Promise((resolve, reject) => {
    return axios
      .post(basePath + "logout")
      .then((res) => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        resolve(res);
        // return res;
      })
      .catch((err) => {
        // return err;
        reject(err);
      });
  });
};
