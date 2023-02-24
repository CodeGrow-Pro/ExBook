import React from 'react'
import Footer from '../component/Footer';
import Form from '../component/Form';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

const Regester = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header heading="Registration"/>
        <Form />
        <Footer />
    </div>
  )
}

export default Regester;