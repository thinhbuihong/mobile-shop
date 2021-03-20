import styled from "styled-components/macro";

export const Container = styled.div`
  border-top: 0.1rem solid gray;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

export const FooterGroup = styled.div`
  width: 25rem;
  border-left: 0.1rem solid gray;
`;

export const GroupHeader = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  display: inline-block;
  border-bottom: 0.1rem solid gray;
  padding: 1rem;
`;
export const GroupItems = styled.div`
  text-transform: capitalize;
  font-size: 1.5rem;
  padding: 1rem;
`;
export const Item = styled.a`
  display: block;
  text-decoration: none;
  color: #2a5c86;
`;
