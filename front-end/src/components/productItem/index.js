import React from "react";
import { Link } from "react-router-dom";
import {
  AddButton,
  PriceDetailt,
  ProductImage,
  ProductInfo,
  ProductItemWrapper,
  ProductName,
  ProductPrice
} from "./style/productItem";

export const ProductItem = ({ product }) => {
  return (
    <ProductItemWrapper>
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
    </ProductItemWrapper>
  );
};
