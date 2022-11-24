import React from 'react'
import { Link } from 'react-router-dom';
import proImg1 from  '../../assets/img/headphone.jpg'

import './Product.css'


const Product = ({product}) => {
   const {_id, name, description, price, quantity, suppliers, img} = product;
   
  return (
    <div className="col-md-4">
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
        <Link to={`/inventory/${_id}`}> 
           <button className='btn btn-primary my-3'>Stock Update</button>
        </Link>
    </div>
</div> 
  )
}

export default Product
