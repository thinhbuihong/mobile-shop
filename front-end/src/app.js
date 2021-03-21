import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { HomePage } from "./pages/home";
import { ProductDetailPage } from "./pages/productDetail";
import { ProductsPage } from "./pages/products";

export const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/cart/:id?" component={Cart} />
      </Router>
    </>
  );
};