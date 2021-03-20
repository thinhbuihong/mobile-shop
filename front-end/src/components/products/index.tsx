import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "../productItem";
import { Container } from "./style/products";

interface Props {}

export const Products = (props: Props) => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {products.map((product: any, i: number) => (
        <ProductItem key={i} product={product} />
      ))}
    </Container>
  );
};
