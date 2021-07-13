import { productsConstants } from "../_constants";

const initialState = {
  products: [],
};
export function productRegistration(state = initialState, action) {
  switch (action.type) {
    case productsConstants.PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    default:
      return state;
  }
}
