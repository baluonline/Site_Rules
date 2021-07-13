import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/home";
import store from "./components/_helpers/store";

/* const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
 */
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("app")
);
