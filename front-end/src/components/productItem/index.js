import React from "react";
import { Link } from "react-router-dom";
import {
  AddButton,
  Container,
  PriceDetailt,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./style/productItem";

export const ProductItem = ({ product }) => {
  return (
    <Container>
      <Link to={'/products/' + product._id}>
        <ProductImage src={product.image} />
      </Link>
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
