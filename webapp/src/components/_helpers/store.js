import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../_reducers"
import { composeWithDevTools } from "redux-devtools-extension";

// const loggerMiddleware = createLogger();
/* const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
