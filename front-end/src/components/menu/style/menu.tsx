import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #383838;
  border-radius: 0.7rem;
`;
export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.8rem;
  text-transform: uppercase;
  flex-wrap: wrap;
`;
export const MenuItem = styled.li`
  padding: 1rem 1.7rem;
  color: white;
  border-right: 3px solid black;
  font-weight: lighter;
  cursor: pointer;
`;

export const Searchbox = styled.input`
  margin-right: 3rem;
  font-size: 1.4rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
`;
