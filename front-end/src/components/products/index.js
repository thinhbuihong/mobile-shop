import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productAction";
import { Loader } from "../loader";
import { Message } from "../message";
import { ProductItem } from "../productItem";
import { Container } from "./style/products";

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
