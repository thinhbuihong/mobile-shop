import React from "react";
import {
  Container,
  FooterGroup,
  GroupHeader,
  GroupItems,
  Item,
} from "./style/footer";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <Container>
      <FooterGroup>
        <GroupHeader>information</GroupHeader>
        <GroupItems>
          <Item href="#">about us</Item>
          <Item>customer service</Item>
          <Item>advanced search</Item>
          <Item>orders and return</Item>
          <Item>contacts us</Item>
        </GroupItems>
      </FooterGroup>

      <FooterGroup>
        <GroupHeader>why buy from us</GroupHeader>
        <GroupItems>
          <Item>about us</Item>
          <Item>customer service</Item>
          <Item>privacy policy</Item>
          <Item>site map</Item>
          <Item>search terms</Item>
        </GroupItems>
      </FooterGroup>

      <FooterGroup>
        <GroupHeader>my account</GroupHeader>
        <GroupItems>
          <Item>sign in</Item>
          <Item>view cart</Item>
          <Item>my whishlist</Item>
          <Item>reack my order</Item>
          <Item>help</Item>
        </GroupItems>
      </FooterGroup>

      <FooterGroup>
        <GroupHeader>contact</GroupHeader>
        <GroupItems>
          <Item>+91-123-456789</Item>
          <Item>+00-123-000000</Item>
        </GroupItems>
      </FooterGroup>
    </Container>
  );
};
