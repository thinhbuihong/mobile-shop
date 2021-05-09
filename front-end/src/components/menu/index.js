import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, MenuList, MenuWrapper, Searchbox } from "./style/menu";

export const Menu = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>
          <Link to="/">home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">products</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">about</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">contact</Link>
        </MenuItem>
      </MenuList>

      <Searchbox type="input" placeholder="Search" />
    </MenuWrapper>
  );
};
