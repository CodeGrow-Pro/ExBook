import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <div className='navbar'>
       <div className='logo'>
            <h1>ExBook</h1>
        </div>
        <ul className='menu'>
            <li><Link>Home</Link></li>
            <li><Link>About Us</Link></li>
            <li><Link>Shop</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Contact Us</Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar