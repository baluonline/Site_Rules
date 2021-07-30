import { productsConstants } from "../_constants";
import { History } from "history";
import axios from "axios";
const basePath = "http://localhost:4000/feed/";

export const fetchProducts = (payload) => {
  const noProducts = [];
  return new Promise((resolve, reject) => {
    return axios
      .get(basePath + "products", {
        headers: {
          Authorization: "Bearer " + payload,
        },
      })
      .then((results) => {
        resolve({
          type: productsConstants.FETCH_PRODUCTS,
          payload: results.data.products,
        });
      })
      .catch((err) => {
        console.log(err);
        reject({ type: productsConstants.FETCH_PRODUCTS, payload: noProducts });
      });
  });
};
