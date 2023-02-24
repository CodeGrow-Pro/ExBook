import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Product from '../component/Product'

const Shop = () => {
  return (
    <div>
        <Navbar />
        <Header heading="#Shop"/>
        <Product />
        <Newsletter />
        <Footer />
    </div>
  ) 
}

export default Shop