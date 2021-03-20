import React from "react";
import {
  AddButton,
  Container,
  PriceDetailt,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./style/productItem";

interface Props {}

export const ProductItem = (props: Props) => {
  return (
    <Container>
      <ProductImage src="/images/feature-pic2.jpg" />
      <ProductInfo>
        <ProductName>product1</ProductName>
        <PriceDetailt>
          <ProductPrice>$4000</ProductPrice>
          <AddButton>Add to Cart</AddButton>
        </PriceDetailt>
      </ProductInfo>
    </Container>
  );
};
