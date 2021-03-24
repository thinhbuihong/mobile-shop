import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { createOrder } from '../../actions/orderActions';
import { CART_CLEAR } from '../../constants/cartConstants';
import { Message } from '../message';
import { PaymentButton, PaymentSummaryHeader, PaymentSummaryItem, PaymentSummaryWrapper } from './style/paymentSummary'

const PaymentSummary = () => {
  const history = useHistory();
  const { cartItems, shippingAddress } = useSelector(state => state.cart);
  const { success, error, loading } = useSelector(state => state.orderCreate);
  const dispatch = useDispatch();

  const price = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = price > 500 ? 0 : 100;
  const tax = (price * 0.15).toFixed(2);
  const total = price + shipping + Number(tax);

  useEffect(() => {
    if (success) {
      // history.pushState(`/order/${order._id}`);
      history.push('/');
      dispatch({ type: CART_CLEAR })
    }
  }, [history, success, dispatch]);

  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cartItems,
      shippingAddress,
      paymentMethod: 'paypal',
      itemsPrice: price,
      shippingPrice: shipping,
      taxPrice: tax,
      totalPrice: total,
    }))
  }

  return (
    <PaymentSummaryWrapper>
      {success && <Message variant='info' message='SUCCESS' />}
      {error && <Message variant='error' message={error} />}
      <PaymentSummaryHeader>order summary</PaymentSummaryHeader>

      <table style={{ width: '100%' }}>
        <PaymentSummaryItem>
          <td>Items</td>
          <td>$ {price}</td>
        </PaymentSummaryItem>

        <PaymentSummaryItem>
          <td>Shipping</td>
          <td>$ {shipping}</td>
        </PaymentSummaryItem>

        <PaymentSummaryItem>
          <td>Tax</td>
          <td>$ {tax}</td>
        </PaymentSummaryItem>

        <PaymentSummaryItem>
          <td>Total</td>
          <td>$ {total}</td>
        </PaymentSummaryItem>
      </table>

      <PaymentButton onClick={placeOrderHandler}
        disable={loading}>PLACE ORDER</PaymentButton>
    </PaymentSummaryWrapper>
  )
}

export default PaymentSummary
