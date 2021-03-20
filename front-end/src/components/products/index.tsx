import React from "react";
import { ProductItem } from "../productItem";
import { Container } from "./style/products";

interface Props {}

export const Products = (props: Props) => {
  return (
    <Container>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Container>
  );
};
