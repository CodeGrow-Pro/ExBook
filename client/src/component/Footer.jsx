import React from 'react'
import './Footer.css'
import {FaArrowAltCircleRight, FaArrowRight, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLongArrowAltUp, FaMailBulk, FaMap, FaMapMarked, FaMapPin, FaPhone, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='footer'>
           <div>
                 <h1 className='logo'>Ex<span>Book</span></h1>
                 <div className='footer-content'>
                    <p>ExBook is a Book Store </p>
                        {/* <p><strong>Ecommerce Website</strong> Template by </p>
                        <p>DexignZone lorem ipsum dolor sit</p> */}
                 </div>
                 <div className="social-media">
                      <ul>
                       <Link> <li><FaFacebook></FaFacebook></li></Link>
                       <Link> <li><FaYoutube></FaYoutube></li></Link>
                       <Link> <li><FaLinkedin></FaLinkedin></li></Link>
                       <Link> <li><FaInstagram></FaInstagram></li></Link>
                       <Link> <li><FaTwitter></FaTwitter></li></Link>
                      </ul>
                 </div>
           </div>
           <div className="footer-menu">
                 <h1 className='logo'>Our Links</h1>
                 <ul>
                       <Link to="about"> <li> About Us</li></Link>
                       <Link to="contact"> <li>Contact Us</li></Link>
                       <Link to="shop"> <li>Shop</li></Link>
                       <Link to="#"> <li>Privacy Policy</li></Link>
                       <Link to="#"> <li>FAQ's</li></Link>
                      </ul>
           </div>
           <div className="contact">
                      <h1 className='logo'>Get in Touch With Us</h1>
                      <ul>
                         <li><FaMapMarked></FaMapMarked>
                         <span>Delhi Road Mohkampur , Meerut (U.P)</span></li>
                         <li><FaPhone></FaPhone><span>+91 7618560025 , +91 7900439354</span></li>
                         <li><FaMailBulk></FaMailBulk><span>Vk4993102@gmail.com</span></li>
                      </ul> 
           </div>
        </div>
    </div>
  )
}

export default Footer