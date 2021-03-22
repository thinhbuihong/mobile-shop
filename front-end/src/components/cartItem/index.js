import React from 'react'
import { CartItemWrapper, CartItemImage, CartItemName, CartItemPrice, CartItemQuantity, CartItemRemove } from './style/cartItem'
import { useDispatch } from 'react-redux'
import { removeItemInCart } from '../../actions/cartActions';

export const CartItem = ({ item, num }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeItemInCart(id))
  }

  return (
    <CartItemWrapper>
      <td>{num}</td>
      <td><CartItemImage src={item.image} /></td>
      <td><CartItemName>{item.name}</CartItemName></td>
      <td><CartItemPrice>{item.price}</CartItemPrice></td>
      <td><CartItemQuantity>{item.quantity}</CartItemQuantity></td>
      <td><CartItemRemove onClick={removeItem.bind(this, item.productId)}>✖</CartItemRemove></td>
    </CartItemWrapper>
  )
}
