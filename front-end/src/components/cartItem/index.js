import React from 'react'
import { CartItem__Container, CartItem__Image, CartItem__Name, CartItem__Price, CartItem__Quantity, CartItem__Remove } from './style/cartItem'
import { useDispatch } from 'react-redux'
import { removeItemInCart } from '../../actions/cartActions';

export const CartItem = ({ item, num }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeItemInCart(id))
  }

  return (
    <CartItem__Container>
      <td>{num}</td>
      <td><CartItem__Image src={item.image} /></td>
      <td><CartItem__Name>{item.name}</CartItem__Name></td>
      <td><CartItem__Price>{item.price}</CartItem__Price></td>
      <td><CartItem__Quantity>{item.quantity}</CartItem__Quantity></td>
      <td><CartItem__Remove onClick={removeItem.bind(this, item.productId)}>✖</CartItem__Remove></td>
    </CartItem__Container>
  )
}
