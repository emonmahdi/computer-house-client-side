import React from 'react'
import AboutUs from '../../AboutUs/AboutUs'
import Category from '../../Category/Category'
import Footer from '../../Footer/Footer'
import Products from '../../Products/Products'
import ServiceProvide from '../../ServiceProvide/ServiceProvide'
import Banner from '../Banner/Banner'
import HeaderNav from '../HeaderNav/HeaderNav'

const Home = () => {
  return (
    <div>
      <HeaderNav />
      <Banner />
      <AboutUs />
      <ServiceProvide />
      <Products />
      <Category />
      <Footer />
    </div>
  )
}

export default Home
