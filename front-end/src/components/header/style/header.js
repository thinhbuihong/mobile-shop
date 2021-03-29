import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 0.2rem solid gray;
`;

export const Logo = styled.img``;

export const Info = styled.div`
  display:flex;
  font-size: 1.6rem;

  &>a{
    color:black;
    font-weight:bold;
    text-decoration:none;
    margin-right: 2rem;
    transition:all .3s;
    &:hover{
      transform: translateY(-.3rem);
    }
  }
`;
