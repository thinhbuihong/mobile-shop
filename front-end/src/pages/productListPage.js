import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import ProductList from "../components/productList";

const ProductListPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <ProductList />
      <Footer />
    </>
  );
};
export default ProductListPage;