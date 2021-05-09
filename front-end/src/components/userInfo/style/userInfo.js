import styled from 'styled-components/macro';

export const UserInfoWrapper = styled.div`
  position:relative;
`;

export const UserName = styled.span`
  display:block;
  font-weight:bold;
  cursor:pointer;
  transition: all 0.3s;
  
  &:hover{
    transform: translateY(-0.3rem);
  }
`;
export const UserInfoDropdown = styled.ul`
  display:block;
  list-style-type:none;
  position:absolute;
  width:100%;

  & li{
    border:1px solid black;
    padding-left:1rem;
    font-weight:bold;
    cursor:pointer;
    background-color: black;
    color:white;
    & a{
      color:white;
      text-decoration:none;
    }

    &:not(:last-child){
      border-bottom:1px solid grey;
    }
    &:hover, &:hover a{
      color:grey;
    }
  }
`;