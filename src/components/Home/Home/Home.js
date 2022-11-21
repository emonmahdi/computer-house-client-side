import React from 'react'
import Footer from '../../Footer/Footer'
import Products from '../../Products/Products'
import Banner from '../Banner/Banner'
import HeaderNav from '../HeaderNav/HeaderNav'

const Home = () => {
  return (
    <div>
      <HeaderNav />
      <Banner />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
