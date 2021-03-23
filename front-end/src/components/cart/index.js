import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../actions/cartActions'
import { CartItem } from '../cartItem'
import { Message } from '../message'
import { CartClearButton, CartHeader, CartItems, CartItemsHeader, CartWrapper } from './style/cart'

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  return (
    cartItems.length > 0 ?
      (<CartWrapper>
        <CartHeader>shopping cart</CartHeader>
        <CartItems>
          <CartItemsHeader>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </CartItemsHeader>

          <tbody>
            {cartItems.map((item, i) => (
              <CartItem item={item} key={i} num={i + 1} />
            ))}
          </tbody>
        </CartItems>

        <CartClearButton onClick={() => {
          dispatch(clearCart())
        }}>CLEAR</CartClearButton>
      </CartWrapper>)
      : <Message message="Cart Empty" />

  )
}
