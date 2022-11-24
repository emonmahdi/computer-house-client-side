import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useServiceDetails from '../../hooks/useServiceDetails';

import './ProductDetails.css'


const ProductDetails = () => {
    const {Id} = useParams(); 
    // const [allProducts,setAllProducts] = useState([])

    const [products, setProducts] = useServiceDetails(Id); 
    // console.log(products);
    const {_id, name, price, description, img,suppliers, quantity } = products;
  
    // useEffect(() => {
    //   fetch('https://computer-house-app.onrender.com/products')
    //   .then(res => res.json())
    //   .then(data => {
    //     setAllProducts(data);
    //   })
    // }, [])

    const handleDelivered = (id) => {
      const newQuantity = parseInt(quantity) - 1;
      const updateQuantity = { newQuantity }

      const url = `https://computer-house-app.onrender.com/products/${_id}`
      fetch(url, {
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(updateQuantity)
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){ 
        //  const remain =  allProducts.filter(product => product._id !== Id)
          
        }
        console.log(data);

      })
    }

  return (
    <div className='product-details-section'>  
      <div className="container mt-5">
        <div className="row"> 
          <div className="col-md-6">
            <div className="single-product border p-3 shadow">
                <div className="single-price">
                  <h6 className='bg-dark d-inline-block p-2 text-light rounded-3'> <span className='text-warning'>Price:</span>  {price}</h6>
                </div>
                <div className='single-quantity'>
                  <p className='text-light bg-dark p-2 d-inline-block rounded-3'><span className='text-warning'>Quatity: </span>{quantity}</p>
                </div>
                <img src={img} className='img-fluid single-img' alt="" />

                <h5 className='single-title'>{name}</h5>
                <p>{description}</p>  
                <h6>Supplier Name: <span className='text-danger'>{suppliers}</span></h6>
                 
                <button onClick={() =>  handleDelivered(_id)} className='btn btn-primary my-3'>Delivered</button>
                
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
