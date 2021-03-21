import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Menu } from '../components/menu';

export const Cart = ({ match, history }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId))
    }
  }, [dispatch, match])

  return (
    <>
      <Header />
      <Menu />
        
      <Footer />
    </>
  )
}
