import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { HeaderWrapper, Info, Logo } from "./style/header";

export const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);

  const logoutHandler = (e) => {
    dispatch(logout());
  }
  return (
    <HeaderWrapper>
      <Logo src="/images/logo.png" />
      <Info>
        {userInfo ? (
          <div>
            <Link to='/profile'>{userInfo.name}</Link>
            <button onClick={logoutHandler}>logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">CART</Link>
      </Info>
    </HeaderWrapper>
  );
};
