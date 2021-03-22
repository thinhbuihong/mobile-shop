import React from 'react'
import { Cart } from '../cart'
import { Checkout } from '../checkout'
import { CartSectionWrapper } from './style/cartSection'

export const CartSection = () => {
  return (
    <CartSectionWrapper>
      <Cart />
      <div style={{ width: '30%' }}>
        <Checkout />

      </div>
    </CartSectionWrapper>
  )
}
