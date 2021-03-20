import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  match: any;
}

export const ProductDetailPage = ({ match }: Props) => {
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/products/" + match.params.id);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return <div>product detail page</div>;
};
