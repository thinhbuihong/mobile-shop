import React from 'react';
import { Loader } from '../loader';
import { Message } from '../message';
import { ProductItem } from '../productItem';
import { ProductGroupBody, ProductGroupTitle, ProductGroupWrapper } from './style/productGroup';

export const ProductGroup = ({ products, loading, error, title }) => {
  return (
    <ProductGroupWrapper>
      <ProductGroupTitle>{title}</ProductGroupTitle>
      <ProductGroupBody>
        {loading ? <Loader /> :
          error && <Message message={error} variant='info' />}
        {products && products.map((product, i) => {
          return <ProductItem key={i} product={product}
            style={{ width: '25%' }}
          />;
        })}
      </ProductGroupBody>
    </ProductGroupWrapper>
  )
}
