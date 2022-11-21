import React from 'react' 
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-section'>
       <div className="container">
        <div className="hero-content">
            <div>
                <h1>Welcome to our <span className='text-warning px-2 rounded'>Computer House</span> </h1>
                <p>Use computer accessories work smarter and be faster</p>
                <button className='btn btn-primary'>All Products</button>
            </div>
           
        </div>
       </div>
    </div>
  )
}

export default Banner
