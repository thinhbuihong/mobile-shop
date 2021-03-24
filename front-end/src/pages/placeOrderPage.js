import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import PaymentDetail from '../components/paymentDetail';
import PaymentSummary from '../components/paymentSummary';


const PlaceOrderPage = () => {
  const history = useHistory();
  const { shippingAddress } = useSelector(state => state.cart);

  const emptyAddress = Object.values(shippingAddress).some(x => x === null || x === '');
  if (emptyAddress) {
    history.push('/shipping');
  }

  return (
    <>
      <Header />
      <Menu />

      <PaymentWrapper>
        <PaymentDetail />
        <PaymentSummary />
      </PaymentWrapper>

      <Footer />
    </>
  )
}

const PaymentWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`;

export default PlaceOrderPage
