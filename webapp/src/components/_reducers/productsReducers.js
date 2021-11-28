import { productsConstants } from "../_constants";

const initialState = {
  products: [],
  registeredProductSuccess: null,
  estimatedProducts: [],
  showInvoice: false,
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
      let _estimatedProds = [];
      const _found = state.estimatedProducts.find(
        (item) => item._id == action.payload._id
      );
      if (_found) {
        state.estimatedProducts.find((item) => {
          if (item._id == action.payload._id) {
            item.quantity = item.quantity + 1;
          }
        });
        _estimatedProds = [...state.estimatedProducts];
      } else {
        _estimatedProds = [...state.estimatedProducts, action.payload];
      }

      return {
        ...state,
        estimatedProducts: _estimatedProds,
      };
    case productsConstants.SHOW_INVOICE:
      return {
        ...state,
        showInvoice: action.payload,
      };
    default:
      return state;
  }
}
