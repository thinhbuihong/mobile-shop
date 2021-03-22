import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../actions/cartActions'
import { CartItem } from '../cartItem'
import { Message } from '../message'
import { CartHeader, CartItems, CartWrapper, CartItemsHeader, CartClearButton } from './style/cart'

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  return (
    cartItems.length > 0 ?
      (<CartWrapper>
        <CartHeader>shopping cart</CartHeader>
        <CartItems>
          <CartItemsHeader>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </CartItemsHeader>

          {cartItems.map((item, i) => (
            <CartItem item={item} key={i} num={i + 1} />
          ))}
        </CartItems>

        <CartClearButton onClick={() => {
          dispatch(clearCart())
        }}>CLEAR</CartClearButton>
      </CartWrapper>)
      : <Message message="Cart Empty" />

  )
}
