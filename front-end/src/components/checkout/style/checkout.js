import styled from 'styled-components/macro';

export const CheckoutWrapper = styled.div`
  border:1px solid grey;
  padding:1.5rem;
  margin:3rem 0 0 1rem; 
`;

export const CheckoutHeader = styled.h3`
  display:block;
  font-size:2rem;
`;

export const CheckoutTotal = styled.span`
  display:block;
  font-size:1.5rem;
  letter-spacing:.1rem;
  margin:1rem 0;
`;
export const CheckoutButton = styled.button`
  width:100%;
  background-color:black;
  color:white;
  border:none;
  cursor:pointer;
  padding:1.2rem;
  font-weight:bold;
`;