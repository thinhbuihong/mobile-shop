import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../productItem";
import { Container } from "./style/products";
import { getProducts } from "../../actions/productAction";
import { Loader } from "../loader";
import { Message } from "../message";

export const Products = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      {loading ? <Loader /> :
        error && < Message message={error} variant='info' />}

      {products?.map((product, i) => (
        <ProductItem key={i} product={product} />
      ))}
    </Container>
  );
};
