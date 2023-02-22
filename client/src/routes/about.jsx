import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'

const About = () => {
  return (
    <div>
        <Navbar />
         <Header heading="About Us"/>
         <Newsletter />
        <Footer />
    </div> 
  )
}

export default About