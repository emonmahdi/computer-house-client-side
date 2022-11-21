import React from 'react'
import img1 from '../../assets/img/IT.svg'
import img2 from '../../assets/img/hospital.svg'
import img3 from '../../assets/img/education.svg'

import './ServiceProvide.css'


const ServiceProvide = () => {
  return (
    <div className='service-provide'>
      <div className="container">
        <div className="row d-flex align-items-center" >
            <div className="col-md-6">
                <div className="category-content">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-category p-3 bg-light rounded-3 shadow">
                                <img src={img1} className='img-fluid' alt="" />
                                <h6>IT Company</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-category p-3 bg-light rounded-3 shadow">
                                <img src={img2} className='img-fluid' alt="" />
                                <h6>Hospital Management</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-category p-3 bg-light rounded-3 shadow">
                                <img src={img3} className='img-fluid' alt="" />
                                <h6>Education Platform</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="provide-content text-start">
                    <h6>How can help you</h6>
                    <h2>Business Solutions To Growth Business</h2>
                    <p>Sed ut perspiciatis unde omnis natus error voluptatems accusa ntium doloremque laudantium totam.</p>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProvide
