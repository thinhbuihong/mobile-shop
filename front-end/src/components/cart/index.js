import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../actions/cartActions'
import { CartItem } from '../cartItem'
import { Message } from '../message'
import { Cart__Header, Cart__Items, Cart__Container, Cart__ItemsHeader, Cart__Clear } from './style/cart'

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  return (
    cartItems.length > 0 ?
      (<Cart__Container>
        <Cart__Header>shopping cart</Cart__Header>
        <Cart__Items>
          <Cart__ItemsHeader>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </Cart__ItemsHeader>

          {cartItems.map((item, i) => (
            <CartItem item={item} key={i} num={i + 1} />
          ))}
        </Cart__Items>

        <Cart__Clear onClick={() => {
          dispatch(clearCart())
        }}>CLEAR</Cart__Clear>
      </Cart__Container>)
      : <Message message="Cart Empty" />

  )
}
