import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addToCart } from '../../actions/cartActions';
import { getProductDetail } from '../../actions/productAction';
import { Loader } from '../loader';
import { Message } from '../message';
import { Add, Available, Container, Detail, ProductDescription, ProductImage, ProductName, ProductPrice } from './style/productDetail'

export const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { product, error, loading } = useSelector(state => state.productDetail);

  useEffect(() => {
    dispatch(getProductDetail(match.params.id))
  }, [match, dispatch]);


  const addToCartHandler = () => {
    // history.push(`/cart/${match.params.id}`)
    dispatch(addToCart(product))
    history.push(`/cart/`)
  }

  return (
    loading ? <Loader /> : error ? <Message message={error} variant='error' /> :
      product && (
        <Container>
          <ProductImage src={product.image} />
          <Detail>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>Price: <span>${product.price}</span></ProductPrice>
            <Available>Count in Stock: {product.countInStock}</Available>
            <Add onClick={addToCartHandler} disabled={product.countInStock < 1}
              active={product.countInStock > 0}>Add to Cart</Add>
          </Detail>
        </Container>)
  )
}
