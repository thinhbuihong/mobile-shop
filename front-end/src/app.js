import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartPage } from "./pages/cartPage";
import { HomePage } from "./pages/homePage";
import { ProductDetailPage } from "./pages/productDetailPage";
import { ProductsPage } from "./pages/productsPage";

export const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/cart/:id?" component={CartPage} />
      </Router>
    </>
  );
};
