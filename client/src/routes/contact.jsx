import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Header heading="Get In Touch" />
        <Newsletter />
        <Footer />
    </div>
  )
}
 
export default Contact