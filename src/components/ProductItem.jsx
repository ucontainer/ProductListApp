import React from 'react'

function ProductItem({ product }) {
  return (
    <div className='prod-item'>
      <h4>{product.name}</h4>
      <div className='price'>
      <p>{product.price}</p>
      </div>
      <p>😊 {product.description} ✅</p> 
    </div>
  )
}

export default ProductItem;
