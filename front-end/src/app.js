import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartPage } from "./pages/cartPage";
import { HomePage } from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import { ProductDetailPage } from "./pages/productDetailPage";
import { ProductsPage } from "./pages/productsPage";
import ProfilePage from './pages/profilePage';
import RegisterPage from "./pages/registerPage";

export const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </Router>
    </>
  );
};
