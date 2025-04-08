import ProductItem from './ProductItem'

function ProductList({ products }) {
  return (
    <div className='prod-list'>
      <h2>Product List Component</h2>
      {products.map((product) =>(
            <ProductItem key={product.id} product={product}/>
      ))}

    </div>
  )
}

export default ProductList
