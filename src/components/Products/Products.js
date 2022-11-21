import React from 'react'
import proImg1 from  '../../assets/img/headphone.jpg'
import './Products.css'


const Products = () => {
  return (
    <div className='product-section'>
      <h3 className='title-products'>Our Products</h3>
      <div className="container">
        <div className="row">
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <img src={proImg1} className='img-fluid' alt="" />
                    <h5>Smart HeadPhone</h5>
                    <h6>Price: 1400</h6>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
