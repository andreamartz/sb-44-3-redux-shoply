import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <ProductsList />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetails />
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}

export default Routes;