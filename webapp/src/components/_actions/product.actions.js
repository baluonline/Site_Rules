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

export const registerProduct = (payload) => {
  const data = {
    imageUrl: payload.product.imageUrl,
    title: payload.product.title,
    price: payload.product.price,
    description: payload.product.description,
    quantity: payload.product.quantity,
  };
  const url = "http://localhost:4000/feed/product/";
  return new Promise((resolve, reject) => {
    return axios
      .post(
        basePath + "/product",
        {
          imageUrl: payload.product.imageUrl,
          title: payload.product.title,
          description: payload.product.description,
          price: payload.product.price,
          quantity: payload.product.quantity,
        },
        {
          headers: {
            Authorization: "Bearer " + payload.token,
          },
        }
      )

      .then((results) => {
        resolve({
          type: productsConstants.PRODUCT_REGISTER_SUCCESS,
          status: results.data.success,
          message: results.data.message,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteProduct = (payload) => {
  const productId = payload.productId;
  return new Promise((resolve, reject) => {
    return axios
      .delete(basePath + "product/" + productId, {
        headers: {
          Authorization: "Bearer " + payload.token,
        },
      })
      .then((resp) => {
        // console.log(resp);
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};
 