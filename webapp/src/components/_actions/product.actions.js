import { productsConstants } from "../_constants";
import { History } from "history";

export const registerProduct = (product) => {
  return (dispatch) => {
    dispatch(request(product))
    // need to develop api fetch
    dispatch(success(product));
  };
  function request(product) {
    return { type: productsConstants.PRODUCT, payload:product };
  }
  function success(product) {
    return { type: productsConstants.REGISTER_SUCCESS, product };
  }
};
