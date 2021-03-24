import React from 'react'
import { useSelector } from 'react-redux'
import { PaymentDetailGroup, PaymentDetailWrapper, PaymentItem, PaymentItemImage, PaymentItemName, PaymentItems, PaymentItemTotalPrice, PaymentTitle } from './style/paymentDetail'

const PaymentDetail = () => {
  const { shippingAddress, cartItems } = useSelector(state => state.cart);

  return (
    <PaymentDetailWrapper>
      <PaymentDetailGroup>
        <PaymentTitle>shipping</PaymentTitle>
        <p>Address: {Object.values(shippingAddress).join(' ')}</p>
      </PaymentDetailGroup>

      <PaymentDetailGroup>
        <PaymentTitle>payment method</PaymentTitle>
        <p>Method: Paypal</p>
      </PaymentDetailGroup>

      <PaymentDetailGroup>
        <PaymentTitle>order items</PaymentTitle>
        <PaymentItems>


          {cartItems.map((item, i) => (
            <PaymentItem key={i}>
              <td><PaymentItemImage src={item.image} /></td>
              <td><PaymentItemName>{item.name}</PaymentItemName></td>
              <td><PaymentItemTotalPrice>${
                item.price * item.quantity
              }</PaymentItemTotalPrice></td>
            </PaymentItem>
          ))}
        </PaymentItems>
      </PaymentDetailGroup>
    </PaymentDetailWrapper>
  )
}

export default PaymentDetail
