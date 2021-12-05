import React from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../public/Bigger_bowl_logo.png";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  IndexRoute,
} from "react-router-dom";
// import RoutesPages from '../routes'

import ViewProducts from "./products/view-products";
import AddProduct from "./products/add-product";
import Signin from "./auth/signin";
import Signup from "./auth/signup";
import Signout from "./auth/signout";
import LandingPage from "./products/landingpage";

const Header = () => {
  const userId = useSelector((state) => state.userAuth.userId);
  return (
    <Router>
      <div className="row">
        <p className="col-lg-5 col-md-2 col-sm-2"></p>
        <h1
          className="align-self-center col-lg-4 col-md-6 col-sm-6"
          id="header-title"
        >
          Feel better shopping at Bigger Bowl
        </h1>
        <p className="col-lg-2 col-md-2 col-sm-2"></p>

        <nav
          className="col-12 navbar navbar-expand-lg navbar-dark bg-dark"
          id="bb-header"
        >
          <img
            src={logo}
            alt="logo"
            className="img-fluid  float-left img-thumbnail"
            id="bb-logo"
          />
          <a className="navbar-brand col-lg-2 col-md-2 col-xl-2" href="/">
            Bigger Bowl
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mt-2 mt-lg-0 col-lg-8">
              <li>
                <Link className="nav-link header-nav-link" to="/products">
                  Products
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link header-nav-link" to="/add-products">
                  Add Products
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            {!userId ? (
              <ul className="navbar-nav mr-auto my-2 my-lg-0 col-lg-3">
                <li className="col-lg-4"></li>
                <li className="nav-item col-lg-4">
                  <Link className="nav-link header-nav-link" to="/signin">
                    Signin
                  </Link>
                </li>
                <li className="nav-item col-lg-4">
                  <Link className="nav-link header-nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            ) : (
              <Signout />
            )}
          </div>
        </nav>
      </div>

      <section className="row">
        <Switch>
        <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          ></Route>
          <Route
            path="/signin"
            exact
            render={(props) => <Signin {...props} />}
          ></Route>
          <Route
            path="/signup"
            exact
            render={(props) => <Signup {...props} />}
          ></Route>
          <Route
            path="/products"
            exact
            render={(props) => <ViewProducts {...props} />}
          ></Route>
          <Route
            path="/add-products"
            exact
            render={(props) => <AddProduct {...props} />}
          ></Route>
        </Switch>
      </section>
    </Router>
  );
};
export default Header;
