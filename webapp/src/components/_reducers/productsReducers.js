import { productsConstants } from "../_constants";

const initialState = {
  products: [],
  registeredProductSuccess: null,
  estimatedProducts: [],
};
export function productRegistration(state = initialState, action) {
  switch (action.type) {
    case productsConstants.FETCH_PRODUCTS:
      return {
        ...state,
        products: [state.products, ...action.payload],
      };
    case productsConstants.PRODUCT_REGISTER_SUCCESS:
      return {
        ...state,
        registeredProductSuccess: action.payload,
      };
    case productsConstants.PRODUCT_ESTIMATIONS:
      return {
        ...state,
        estimatedProducts: [...state.estimatedProducts, action.payload],
      };
    default:
      return state;
  }
}
