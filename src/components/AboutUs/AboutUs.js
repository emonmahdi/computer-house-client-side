import React from 'react'
import aboutImg from '../../assets/img/about-us.svg'

import './About.css'


const AboutUs = () => {
  return (
    <div className='about-section'>
      <div className="section-title mb-5">
        <h2>About US</h2>
      </div>
      <div className="about-content">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="about-img">
                        <img src={aboutImg } className='img-fluid w-75' alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-description text-start">
                    <h3>Solution for all IT Support </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla in sint distinctio, perspiciatis amet illo dolore a debitis magni velit architecto dignissimos facere, ad harum deleniti! Quas quod doloribus in nemo nam suscipit reiciendis, ipsum dolores laudantium ut ea laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt quae sit quos hic asperiores doloremque tempore sequi accusamus nostrum?</p>
                    <button className='btn btn-primary'>More About </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
