import React from "react";
import { Container, Info, Logo } from "./style/header";

export const Header = () => {
  return (
    <Container>
      <Logo src="/images/logo.png" />
      <Info>Welcome to our Online Store!</Info>
    </Container>
  );
};
