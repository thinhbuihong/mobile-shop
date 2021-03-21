import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Products } from "../components/products";

export const ProductsPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Products />
      <Footer />
    </>
  );
};
