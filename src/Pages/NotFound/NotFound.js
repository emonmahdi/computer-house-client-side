import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/not-found.jpg'


const NotFound = () => {
  return (
    <div className='w-50 mx-auto mt-4'>
      <img src={img} className='img-fluid'  alt="" />
      <Link to='/'> 
        <button className='btn btn-primary mt-3'>Go Home</button>
      </Link>
    </div>
  )
}

export default NotFound
