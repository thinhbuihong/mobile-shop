import React from "react";
import { Link } from "react-router-dom";
import { Container, Info, Logo } from "./style/header";

export const Header = () => {
  return (
    <Container>
      <Logo src="/images/logo.png" />
      <Info>Welcome to our Online Store!
      <Link to="/cart">CART</Link></Info>
    </Container>
  );
};
