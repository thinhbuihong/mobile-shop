import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { UserInfo } from "../userInfo";
import { HeaderWrapper, Info, Logo } from "./style/header";

export const Header = () => {
  const { userInfo } = useSelector(state => state.userLogin);
  const { cartItems } = useSelector(state => state.cart);

  return (
    <HeaderWrapper>
      <Logo src="/images/logo.png" />
      <Info>
        <Link to="/cart">CART ({cartItems.length})</Link>
        {userInfo ? (
          <UserInfo userName={userInfo.name} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Info>
    </HeaderWrapper>
  );
};
