import React from 'react'
import Carts from '../component/Carts'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Main from '../component/Main'
import MyorderTable from '../component/MyorderTable'
import Navbar from '../component/Navbar'

const MyOrder = () => {
  return (
    <div>
        <Navbar />
        <Header heading="My Orders" />
        <MyorderTable />
        <Main />
      <Footer />
    </div>
  )
}

export default MyOrder