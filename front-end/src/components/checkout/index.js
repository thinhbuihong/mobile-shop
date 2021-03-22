import React from 'react'
import { Checkout__Button, Checkout__Container, Checkout__Header, Checkout__Total } from './style/checkout'
import { useSelector } from 'react-redux';

export const Checkout = () => {
  const { cartItems } = useSelector(state => state.cart)
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);




  return (
    cartItems.length > 0 &&
    (<Checkout__Container>
      <Checkout__Header>Total ({cartItems.length}) items</Checkout__Header>
      <Checkout__Total>{totalPrice.toFixed(2)} $</Checkout__Total>
      <Checkout__Button>CHECKOUT</Checkout__Button>
    </Checkout__Container>)
  )
}
