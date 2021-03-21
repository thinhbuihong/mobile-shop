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

interface Props {
  product: any;
}

export const ProductItem = ({ product }: Props) => {
  return (
    <Container>
      <ProductImage src={product.image} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceDetailt>
          <ProductPrice>$ {product.price}</ProductPrice>
          <AddButton>Add to Cart</AddButton>
        </PriceDetailt>
      </ProductInfo>
    </Container>
  );
};
