import { combineReducers } from "redux";

import { productRegistration } from "./productsReducers";
import { userAuth } from "./userReducers";

const rootReducer = combineReducers({
  productRegistration,
  userAuth,
});

export default rootReducer;
