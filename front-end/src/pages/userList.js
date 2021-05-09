import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import UserList from "../components/userList";

const UsersListPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <UserList />
      <Footer />
    </>
  );
};
export default UsersListPage;