import { userConstants } from "../_constants";
import { useReducer } from "react";
import axios from "axios";
const basePath = "http://localhost:4000/auth/";
const initialState = { userToken: null };
import { useDispatch } from "react-redux";

export const userAuth = (username, password) => {
  // const dispatch = useDispatch();
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
        localStorage.setItem("userRole", res.data.role);
        localStorage.setItem("token", res.data.token);
        resolve({ type: userConstants.USER_INFO, payload: res.data });
        // dispatch({ type: userConstants.USER_ROLE, payload: res.data.role });
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
          role:signupData.role
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
