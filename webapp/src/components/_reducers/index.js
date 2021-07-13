/* import { combineReducers } from "redux";

import {productRegistration}  from "./productsReducers";

export default rootReducer = combineReducers({
  product: productRegistration,
});
 */

import { combineReducers } from 'redux';

import { productRegistration } from './productsReducers'

const rootReducer = combineReducers({
  productRegistration,
  });

export default rootReducer;