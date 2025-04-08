import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';

function App() {
    const [products] = useState([
      {id: 1, name: "Laptop", price: "$1000", description: "Big battery laptop"},
      {id: 2, name: "Phone", price: "$599", description: "Great starter phone"},
      {id: 3, name: "Headphones", price: "$350", description: "Great noise cancellation"},
    ]);

  return (
    <div className='container'>
      <ProductList products={products} />
    </div>
  )
}

export default App
