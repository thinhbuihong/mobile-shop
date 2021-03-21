import React from "react";
import { Container, MenuItem, MenuList, Searchbox } from "./style/menu";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>
          <Link to="/">home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">products</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">about</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">contact</Link>
        </MenuItem>
      </MenuList>

      <Searchbox type="input" placeholder="Search" />
    </Container>
  );
};
