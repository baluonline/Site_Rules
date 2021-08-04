import { productsConstants } from "../_constants";

const initialState = {
  products: [],
  registeredProductSuccess:false
};
export function productRegistration(state = initialState, action) {
  switch (action.type) {
    case productsConstants.PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case productsConstants.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case productsConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registeredProductSuccess: action.payload,
      };
    default:
      return state;
  }
}
