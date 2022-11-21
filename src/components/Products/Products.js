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
                    <div className="single-price">
                      <h6 className='bg-dark d-inline-block p-2 text-light rounded-3'> <span className='text-warning'>Price:</span>  1400</h6>
                    </div>
                    <div className='single-quantity'>
                      <p className='text-light bg-dark p-2 d-inline-block rounded-3'><span className='text-warning'>Quatity: </span>101</p>
                    </div>
                    <img src={proImg1} className='img-fluid single-img' alt="" />

                    <h5 className='single-title'>Smart HeadPhone</h5>
                    <p>This headphone are most popular and useful. Very smooth quality sound and easy to use. It's compare the other headphone that's are best choice for users.</p>  
                    <h6>Supplier Name: <span className='text-danger'>Md Bashir Farazi</span></h6>
                    <button className='btn btn-primary my-3'>Stock Update</button>
                </div>
            </div> 
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <div className="single-price">
                      <h6 className='bg-dark d-inline-block p-2 text-light rounded-3'> <span className='text-warning'>Price:</span>  1400</h6>
                    </div>
                    <div className='single-quantity'>
                      <p className='text-light bg-dark p-2 d-inline-block rounded-3'><span className='text-warning'>Quatity: </span>101</p>
                    </div>
                    <img src={proImg1} className='img-fluid single-img' alt="" />

                    <h5 className='single-title'>Smart HeadPhone</h5>
                    <p>This headphone are most popular and useful. Very smooth quality sound and easy to use. It's compare the other headphone that's are best choice for users.</p>  
                    <h6>Supplier Name: <span className='text-danger'>Md Bashir Farazi</span></h6>
                    <button className='btn btn-primary my-3'>Stock Update</button>
                </div>
            </div> 
          {/* Single Product */}
            <div className="col-md-4">
                <div className="single-product border p-3 shadow">
                    <div className="single-price">
                      <h6 className='bg-dark d-inline-block p-2 text-light rounded-3'> <span className='text-warning'>Price:</span>  1400</h6>
                    </div>
                    <div className='single-quantity'>
                      <p className='text-light bg-dark p-2 d-inline-block rounded-3'><span className='text-warning'>Quatity: </span>101</p>
                    </div>
                    <img src={proImg1} className='img-fluid single-img' alt="" />

                    <h5 className='single-title'>Smart HeadPhone</h5>
                    <p>This headphone are most popular and useful. Very smooth quality sound and easy to use. It's compare the other headphone that's are best choice for users.</p>  
                    <h6>Supplier Name: <span className='text-danger'>Md Bashir Farazi</span></h6>
                    <button className='btn btn-primary my-3'>Stock Update</button>
                </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Products
