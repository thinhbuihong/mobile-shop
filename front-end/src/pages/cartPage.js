import React from 'react';
import { CartSection } from '../components/cartSection';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Menu } from '../components/menu';

export const CartPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <CartSection />
      <Footer />
    </>
  )
}
