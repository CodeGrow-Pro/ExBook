import React, { useContext, useState } from 'react'
import { FaBook, FaBookReader, FaLock, FaShoppingBag, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartContext from '../store/cart-Context'
import './Navbar.css'
const Navbar = (props) => {
  const ctx = useContext(CartContext)
  const token = localStorage.getItem("token");
  const [navbar,setNavbar] = useState('')
 window.addEventListener('scroll',()=>{
    if(window.scrollY>=100){
           setNavbar('navbar-scroll')
    }else{
          setNavbar('')
    }
  })
  return (
    <div className='header'>
       <div className={`navbar  ${navbar}`} >
       <div className='logo'>
            <h1>Ex<span>Book</span></h1>
        </div>
        <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to='/About-us'>About Us</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/Cart'><FaShoppingCart></FaShoppingCart></Link>
            <span className='badge'><p>{ctx.items.length}</p></span>
            </li>
            {!token ?(<li><Link to='/ui/login'><FaLock></FaLock></Link></li>):
            (<li><Link to='/user'><FaUserCircle></FaUserCircle></Link></li>)}
        </ul> 
       </div>
    </div>
  )
}

export default Navbar