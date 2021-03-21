import styled from 'styled-components/macro';

export const Container = styled.div`
  display:flex;
  margin: 4rem 0;
  padding:3rem;
`;

export const Detail = styled.div`
  
`;
export const ProductImage = styled.img`
  width:30rem;
  margin-right:3rem;
`;
export const ProductName = styled.h3`
  font-size:2.3rem;
`;
export const ProductDescription = styled.p`
  font-size:1.8rem;
`;
export const ProductPrice = styled.div`
  margin: 1.5rem 0;
  font-size:1.6rem;
  border-bottom:1px red solid;

  & span{
    color:red;
    font-size:2.2rem;
    font-weight:bolder;
    letter-spacing:.1rem;
  }
`;
export const Available = styled.div`
  font-size: 1.5rem;
  margin-bottom:1rem;
  color:grey;
`;
export const Add = styled.button`
  background-color: ${props => props.active ? '#243E79' : ''};
  color: ${props => props.active ? 'white' : 'grey'};
  padding: 1rem;
  font-weight:bold;
  border:none;
  border-radius:.2rem;
  cursor:pointer;
`;
