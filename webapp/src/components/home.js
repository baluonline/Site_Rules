import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Header from './header';
// import ShoppingCards from './shoppingCards'
import RoutesPages from '../routes';
import ViewProducts from './products/view-products';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      component={route.component}
      render={props => {
        <route.component {...props} routes={route.routes} />
      }}
    ></Route>
  )
}

const HomePage = () => {
  const history = useHistory()
  return (
    <Router history={history}>
      <div className="container-fluid">
        <Header />
        {/*  <Switch>
          {routes.map(route => {
            RouteWithSubRoutes(route)
          })
          }
        </Switch> */}
        {/* <ShoppingCards /> */}
      </div>
    </Router>
  )
}

export default HomePage;