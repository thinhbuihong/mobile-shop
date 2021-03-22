import React from 'react'
import { Cart } from '../cart'
import { Checkout } from '../checkout'
import { Container } from './style/cartSection'

export const CartSection = () => {
  return (
    <Container>
      <Cart />
      <div style={{ width: '30%' }}>
        <Checkout />

      </div>
    </Container>
  )
}
