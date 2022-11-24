import React, { useEffect, useState } from 'react' 
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://computer-house-app.onrender.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div id='products-section' className='product-section'>
      <h3 className='title-products'>Our Products</h3>
      <div className="container">
        <div className="row">

        {
          products.map(product => <Product 
          key={product._id}
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
