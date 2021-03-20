import React from "react";
import { Container, MenuItem, MenuList, Searchbox } from "./style/menu";

interface Props {}

export const Menu = (props: Props) => {
  return (
    <Container>
      <MenuList>
        <MenuItem>home</MenuItem>
        <MenuItem>products</MenuItem>
        <MenuItem>about</MenuItem>
        <MenuItem>contact</MenuItem>
      </MenuList>

      <Searchbox type="input" placeholder="Search" />
    </Container>
  );
};
