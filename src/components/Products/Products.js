import React, { useEffect, useState } from 'react' 
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className='product-section'>
      <h3 className='title-products'>Our Products</h3>
      <div className="container">
        <div className="row">

        {
          products.map(product => <Product 
          key={product.id}
            product={product}
          ></Product>)
        }

          {/* Single Product */}
            
            
        </div>
      </div>
    </div>
  )
}

export default Products
