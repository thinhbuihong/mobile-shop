import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { ProductDetail } from "../components/productDetail";
import { Available } from "../components/productDetail/style/productDetail";



export const ProductDetailPage = ({ match }) => {
  return <>
    <Header />
    <Menu />
    <ProductDetail match={match} />
    <Footer />
  </>
};
