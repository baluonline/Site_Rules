/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/Bigger_bowl_logo.png":
/*!*************************************!*\
  !*** ./public/Bigger_bowl_logo.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"public/Bigger_bowl_logo-39d5419c.png\");\n\n//# sourceURL=webpack:///./public/Bigger_bowl_logo.png?");

/***/ }),

/***/ "./src/components/_actions/product.actions.js":
/*!****************************************************!*\
  !*** ./src/components/_actions/product.actions.js ***!
  \****************************************************/
/*! exports provided: registerProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerProduct\", function() { return registerProduct; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ \"./src/components/_constants/index.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n\n\nvar registerProduct = function registerProduct(product) {\n  return function (dispatch) {\n    dispatch(request(product)); // need to develop api fetch\n\n    dispatch(success(product));\n  };\n\n  function request(product) {\n    return {\n      type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"productsConstants\"].PRODUCT,\n      payload: product\n    };\n  }\n\n  function success(product) {\n    return {\n      type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"productsConstants\"].REGISTER_SUCCESS,\n      product: product\n    };\n  }\n};\n\n//# sourceURL=webpack:///./src/components/_actions/product.actions.js?");

/***/ }),

/***/ "./src/components/_constants/index.js":
/*!********************************************!*\
  !*** ./src/components/_constants/index.js ***!
  \********************************************/
/*! exports provided: productsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.constants */ \"./src/components/_constants/products.constants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"productsConstants\", function() { return _products_constants__WEBPACK_IMPORTED_MODULE_0__[\"productsConstants\"]; });\n\n// export * from \"./alert.constants\";\n// export * from \"./user.constants\";\n\n\n//# sourceURL=webpack:///./src/components/_constants/index.js?");

/***/ }),

/***/ "./src/components/_constants/products.constants.js":
/*!*********************************************************!*\
  !*** ./src/components/_constants/products.constants.js ***!
  \*********************************************************/
/*! exports provided: productsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsConstants\", function() { return productsConstants; });\nvar productsConstants = {\n  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',\n  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',\n  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',\n  PRODUCT: 'REGISTER_PRODUCT',\n  PRODUCT_TITLE: 'REGISTER_PRODUCT_TITLE',\n  PRODUCT_DESCRIPTION: 'REGISTER_PRODUCT_DESCRIPTION',\n  PRODUCT_IMAGE: 'REGISTER_PRODUCT_IMAGE',\n  PRODUCT_PRICE: 'REGISTER_PRODUCT_ESTIMATEDPRICE'\n};\n\n//# sourceURL=webpack:///./src/components/_constants/products.constants.js?");

/***/ }),

/***/ "./src/components/_helpers/store.js":
/*!******************************************!*\
  !*** ./src/components/_helpers/store.js ***!
  \******************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reducers */ \"./src/components/_reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // const loggerMiddleware = createLogger();\n\n/* const store = createStore(\r\n  productsReducer,\r\n  composeWithDevTools(applyMiddleware(thunk))\r\n);\r\n */\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"])));\n\n//# sourceURL=webpack:///./src/components/_helpers/store.js?");

/***/ }),

/***/ "./src/components/_reducers/index.js":
/*!*******************************************!*\
  !*** ./src/components/_reducers/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _productsReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsReducers */ \"./src/components/_reducers/productsReducers.js\");\n/* import { combineReducers } from \"redux\";\r\n\r\nimport {productRegistration}  from \"./productsReducers\";\r\n\r\nexport default rootReducer = combineReducers({\r\n  product: productRegistration,\r\n});\r\n */\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  productRegistration: _productsReducers__WEBPACK_IMPORTED_MODULE_1__[\"productRegistration\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/components/_reducers/index.js?");

/***/ }),

/***/ "./src/components/_reducers/productsReducers.js":
/*!******************************************************!*\
  !*** ./src/components/_reducers/productsReducers.js ***!
  \******************************************************/
/*! exports provided: productRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productRegistration\", function() { return productRegistration; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ \"./src/components/_constants/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  products: []\n};\nfunction productRegistration() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"productsConstants\"].PRODUCT:\n      return _objectSpread({}, state, {\n        products: state.products.concat(action.payload)\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/components/_reducers/productsReducers.js?");

/***/ }),

/***/ "./src/components/auth/signin.js":
/*!***************************************!*\
  !*** ./src/components/auth/signin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Signin = function Signin() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      submitted = _useState4[0],\n      setSubmitted = _useState4[1];\n\n  var username = inputs.username,\n      password = inputs.password;\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setInputs(function (inputs) {\n      return _objectSpread({}, inputs, _defineProperty({}, name, value));\n    });\n  };\n\n  var handleSign = function handleSign(e) {\n    e.preventDefault();\n    setSubmitted(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    name: \"form\",\n    onSubmit: handleSign\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Signin\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"User name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    value: username,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !username ? \"is-invalid\" : \"\"),\n    placeholder: \"Please enter your username\"\n  }), submitted && !username && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Username is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    placeholder: \"Pleas enter your password here\",\n    value: password,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !password ? \" is-invalid\" : \"\")\n  }), submitted && !password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Password is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signup\",\n    className: \"btn btn-link\"\n  }, \"Signup\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signin);\n\n//# sourceURL=webpack:///./src/components/auth/signin.js?");

/***/ }),

/***/ "./src/components/auth/signup.js":
/*!***************************************!*\
  !*** ./src/components/auth/signup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Signup = function Signup() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    fullname: \"\",\n    emailAddress: \"\",\n    username: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      submitted = _useState4[0],\n      setSubmitted = _useState4[1];\n\n  var fullname = inputs.fullname,\n      emailAddress = inputs.emailAddress,\n      username = inputs.username,\n      password = inputs.password,\n      confirmPassword = inputs.confirmPassword;\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setInputs(function (inputs) {\n      return _objectSpread({}, inputs, _defineProperty({}, name, value));\n    });\n  };\n\n  var checkUserName = function checkUserName(username) {\n    return username.lenght >= 8;\n  };\n\n  var checkPassword = function checkPassword(password) {\n    return password.lenght >= 8;\n  };\n\n  var checkConfirmPassword = function checkConfirmPassword(confirmPassword, password) {\n    return password.lenght >= 8 && confirmPassword === password;\n  };\n\n  var handleSignup = function handleSignup(e) {\n    e.preventDefault();\n    setSubmitted(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    name: \"form\",\n    onSubmit: handleSignup\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Sign up form here \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Full Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"fullname\",\n    value: fullname,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !fullname ? \"is-invalid\" : \"\"),\n    placeholder: \"Please enter your full name\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group required\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"control-label\"\n  }, \"Email Address\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    name: \"emailAddress\",\n    value: emailAddress,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !emailAddress ? \"is-invalid\" : \"\"),\n    placeholder: \"Please enter your email address\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group required\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"control-label\"\n  }, \"User Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    value: username,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !checkUserName(username) ? \"is-invalid\" : \"\"),\n    placeholder: \"Please enter your user name\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group required\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"control-label\"\n  }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    value: password,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !checkPassword(password) ? \"is-invalid\" : \"\"),\n    placeholder: \"Please enter your password\"\n  }), submitted && !checkUserName(password) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Password should contain at least 8 chars\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group required\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"control-label\"\n  }, \"Confirm Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"confirmPassword\",\n    value: confirmPassword,\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !checkPassword(confirmPassword) ? \"is-invalid\" : \"\"),\n    placeholder: \"Confirm your password\"\n  }), submitted && !checkConfirmPassword(confirmPassword, password) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Confirm password should match with password\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, \"Submit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signin\",\n    className: \"btn btn-link\"\n  }, \"Signin\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./src/components/auth/signup.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_Bigger_bowl_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/Bigger_bowl_logo.png */ \"./public/Bigger_bowl_logo.png\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _products_view_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/view-products */ \"./src/components/products/view-products.js\");\n/* harmony import */ var _products_add_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/add-product */ \"./src/components/products/add-product.js\");\n/* harmony import */ var _auth_signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signin */ \"./src/components/auth/signin.js\");\n/* harmony import */ var _auth_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup */ \"./src/components/auth/signup.js\");\n\n\n // import RoutesPages from '../routes'\n\n\n\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"col-lg-5 col-md-2 col-sm-2\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"align-self-center col-lg-4 col-md-6 col-sm-6\",\n    id: \"header-title\"\n  }, \"Feel better shopping at Bigger Bowl\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"col-lg-2 col-md-2 col-sm-2\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"row navbar navbar-expand-lg navbar-dark bg-dark\",\n    id: \"bb-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _public_Bigger_bowl_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"logo\",\n    className: \"img-fluid  float-left img-thumbnail\",\n    id: \"bb-logo\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"navbar-brand col-lg-2 col-md-2 col-xl-2\",\n    href: \"#\"\n  }, \"Bigger Bowl\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav  mt-2 mt-lg-0 col-lg-8\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/products\"\n  }, \" Products\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"(current)\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/add-products\"\n  }, \"Add Products\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"(current)\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav mr-auto my-2 my-lg-0 col-lg-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"col-lg-4\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item col-lg-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"signin\"\n  }, \"Signin\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item col-lg-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/signup\"\n  }, \"Signup\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/signin\",\n    exact: true,\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"], props);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/signup\",\n    exact: true,\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_signup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], props);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/products\",\n    exact: true,\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_products_view_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/add-products\",\n    exact: true,\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_products_add_product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], props);\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _products_view_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/view-products */ \"./src/components/products/view-products.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n // import ShoppingCards from './shoppingCards'\n\n\n\n\nvar RouteWithSubRoutes = function RouteWithSubRoutes(route) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: route.path,\n    component: route.component,\n    render: function render(props) {\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, _extends({}, props, {\n        routes: route.routes\n      }));\n    }\n  });\n};\n\nvar HomePage = function HomePage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container-fluid\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/components/home.js?");

/***/ }),

/***/ "./src/components/products/add-product.js":
/*!************************************************!*\
  !*** ./src/components/products/add-product.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_actions/product.actions */ \"./src/components/_actions/product.actions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar AddProduct = function AddProduct() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: \"\",\n    description: \"\",\n    imageUrl: \"\",\n    price: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      submitted = _useState4[0],\n      setSubmitted = _useState4[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setProduct(function (product) {\n      return _objectSpread({}, product, _defineProperty({}, name, value));\n    });\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setSubmitted(true);\n\n    if (product.title && product.description && product.price) {\n      dispatch(Object(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__[\"registerProduct\"])(product));\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \" Please enter your product details here \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    name: \"form\",\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Product Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    value: product.title || '',\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !product.title ? \" is-invalid\" : \"\")\n  }), submitted && !product.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Product Title is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Product Description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"description\",\n    value: product.description || \"\",\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !product.description ? \" is-invalid\" : \"\")\n  }), submitted && !product.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Product Description is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Product Image url\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"imageUrl\",\n    value: product.imageUrl || \"\",\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !product.imageUrl ? \" is-invalid\" : \"\")\n  }), submitted && !product.imageUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Product Image Url is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Estimated Price\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"price\",\n    value: product.price || \"\",\n    onChange: handleChange,\n    className: \"form-control\" + (submitted && !product.price ? \" is-invalid\" : \"\")\n  }), submitted && !product.price && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, \"Product Price is required\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, \"Register\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signin\",\n    className: \"btn btn-link\"\n  }, \"Cancel\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProduct);\n\n//# sourceURL=webpack:///./src/components/products/add-product.js?");

/***/ }),

/***/ "./src/components/products/view-products.js":
/*!**************************************************!*\
  !*** ./src/components/products/view-products.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar ViewProducts = function ViewProducts() {\n  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.productRegistration.products;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"products\" + JSON.stringify(products));\n  }, []);\n\n  var ProductsList = function ProductsList(_ref) {\n    var products = _ref.products;\n\n    // const elements = [\"one\", \"two\", \"three\"];\n    if (products.length > 0) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, products.map(function (product, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: index,\n          className: \"card\",\n          style: {\n            width: \"30em\"\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"card-body\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n          className: \"card-title\"\n        }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"card-text\"\n        }, product.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n          className: \"card-text\"\n        }, \"$\", product.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"#\",\n          className: \"btn btn-primary\"\n        }, \"Add To Cart\")));\n      }));\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \" products are not available\");\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"products\"), products.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductsList, {\n    products: products\n  }) : \"No items are available\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewProducts);\n\n//# sourceURL=webpack:///./src/components/products/view-products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _src_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_helpers_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_helpers/store */ \"./src/components/_helpers/store.js\");\n\n\n // import { composeWithDevTools } from \"redux-devtools-extension\";\n\n\n\n\n\n/* const store = createStore(\r\n  productsReducer,\r\n  composeWithDevTools(applyMiddleware(thunk))\r\n);\r\n */\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n  store: _components_helpers_store__WEBPACK_IMPORTED_MODULE_6__[\"store\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { BrowserRouter as Route, Switch } from 'react-router-dom'\n// import addProduct from \"./components/products/add-product\";\n// import ViewProducts from \"./components/products/view-products\";\n// import Signin from \"./components/auth/signin\"\n// const RoutesPages =\n//     (\n//         <Switch>\n//             <Route\n//                 path=\"/\"\n//                 exact\n//                 render={props => (\n//                     <Signin\n//                         {...props}\n//                         onLogin={this.loginHandler}\n//                         loading={this.state.authLoading}\n//                     />\n//                 )}\n//             >\n//             </Route>\n//         </Switch>\n//     )\n// export default RoutesPages;\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ })

/******/ });