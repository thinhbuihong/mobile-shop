import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { ProductGroup } from "../components/productGroup";


export const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);
  let newProducts = [];
  let featureProducts = [];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products) {
    newProducts = ([1, 2, 3, 4]).map(_ => {
      return products[Math.floor(Math.random() * products.length)];
    });
    featureProducts = ([1, 2, 3, 4]).map(_ => {
      return products[Math.floor(Math.random() * products.length)];
    });
  }

  return (
    <>
      <Header />
      <Menu />
      <ProductGroup title="new products" {...{ loading, error }}
        products={newProducts}
      />
      <ProductGroup title="feature products" {...{ loading, error }}
        products={featureProducts}
      />
      <Footer />
    </>
  );
};
