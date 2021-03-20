import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  max-width: 20rem;
  transition: all 0.3s;

  &:hover {
    border: 0.05rem gray solid;
    box-shadow: 0.2rem 0.2rem 0.5rem #383838;
    transform: translateY(-0.2rem);
  }
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const ProductInfo = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;
export const ProductName = styled.p`
  text-transform: uppercase;
  color: #6a82a4;
`;
export const PriceDetailt = styled.div`
  display: fex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid #cd1f25;
`;
export const ProductPrice = styled.p``;
export const AddButton = styled.button`
  outline: 0rem;
  border: none;
  color: white;
  background-color: #cd1f25;
  padding: 1rem;
  cursor: pointer;
`;
