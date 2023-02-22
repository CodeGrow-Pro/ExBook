import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <Header heading="Blog" />
        <Newsletter />
        <Footer />
    </div>
  )
} 

export default Blog