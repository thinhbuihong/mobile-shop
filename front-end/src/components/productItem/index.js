import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";
import {
  AddButton,
  PriceDetailt,
  ProductImage,
  ProductInfo,
  ProductItemWrapper,
  ProductName,
  ProductPrice
} from "./style/productItem";

export const ProductItem = ({ product, ...restProps }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product));
  }
  return product ? (
    <ProductItemWrapper {...restProps}>
      <Link to={'/products/' + product._id}>
        <ProductImage src={product.image} />
      </Link>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceDetailt>
          <ProductPrice>$ {product.price}</ProductPrice>
          <AddButton onClick={addToCartHandler}>Add to Cart</AddButton>
        </PriceDetailt>
      </ProductInfo>
    </ProductItemWrapper>
  ) : null;
};
