import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getProductDetail } from "../actions/productAction";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Footer } from "../components/footer";


export const ProductDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(state => state.ProductDetailPage);


  useEffect(() => {
    dispatch(getProductDetail(match.params.id))
  }, [match]);

  return <>
    <Header />
    <Menu />

    <Footer />
  </>
};
