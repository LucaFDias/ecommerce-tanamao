import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = (data: any, item: any) => {

  return (
    <ProductCard item={item} key={item.id} />
  )
}

export default ProductsList