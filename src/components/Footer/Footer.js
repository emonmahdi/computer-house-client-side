import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons  from 'react-icons/fa';

import './Footer.css'

const Footer = () => {
  return (
    <> 
    <div className='footer-section'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 mx- auto">
                <div className="footer-content">
                <div className="footer-logo">
                    <Link to='/' style={{textDecoration:'none',fontSize:'25px', color: '#fff'}}>Computer House</Link>
                </div>
                <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis. A dolorem atque, aliquam expedita hic ducimus dolor, odio, et laboriosam similique sit minima voluptate! Nobis culpa labore mollitia corporis.</p>
                <div className="social-footer">
                    <FaIcons.FaFacebookSquare className='social-icon' />
                    <FaIcons.FaTwitter className='social-icon' />
                    <FaIcons.FaInstagram className='social-icon' />
                    <FaIcons.FaLinkedinIn className='social-icon' />
                </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
    <p className='text-center py-3 bg-secondary m-0 text-light'>&copy; copyright form Computer House 2023</p>
    </>
  )
}

export default Footer
