import React from "react";
import { Header } from "../components/header";
import { Menu } from "../components/menu";

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};
