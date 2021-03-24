import React from 'react'
import { CheckoutButton, CheckoutWrapper, CheckoutHeader, CheckoutTotal } from './style/checkout'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Checkout = () => {
  const history = useHistory();
  const { cartItems } = useSelector(state => state.cart)
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    cartItems.length > 0 &&
    (<CheckoutWrapper>
      <CheckoutHeader>Total ({cartItems.length}) items</CheckoutHeader>
      <CheckoutTotal>{totalPrice.toFixed(2)} $</CheckoutTotal>
      <CheckoutButton onClick={checkoutHandler}>CHECKOUT</CheckoutButton>
    </CheckoutWrapper>)
  )
}
