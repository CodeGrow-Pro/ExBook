import React from 'react'
import Carts from '../component/Carts'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter';
const Cart = () => {
  return (
    <div>
        <Navbar/>
        <Header heading="Cart" />
        <Carts/>
        <Newsletter />
        <Footer />
    </div>
  )
}
 
export default Cart