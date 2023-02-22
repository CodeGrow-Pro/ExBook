import React from 'react'
import { FaBook, FaBookOpen, FaHome, FaUsers } from 'react-icons/fa'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div>
        <div className="news-container">
            <div className="some-deatils section-p">
                   <div className="box">
                       <div className="innerbox">
                              <FaUsers></FaUsers>
                       </div>
                       <h1>150,202</h1>
                       <p>Happy Customers</p>
                   </div>
                   <div className="box">
                       <div className="innerbox">
                              <FaBook></FaBook>
                       </div>
                       <h1>102,200</h1>
                       <p>Book Collections</p>
                   </div>
                   <div className="box">
                       <div className="innerbox">
                              <FaHome></FaHome>
                       </div>
                       <h1>182,200</h1>
                       <p>Our Stores</p>
                   </div>
                   <div className="box">
                       <div className="innerbox">
                              <FaBookOpen></FaBookOpen>
                       </div>
                       <h1>102,200</h1>
                       <p>Famous Writers</p>
                   </div>
            </div>
        </div>
        <div className="news">
        <div className="news-subscribe">
                 <div className='text'>
                       <h1>Subscribe our newsletter for newest books updates</h1>
                 </div>
                 <div className='subscibe'> 
                      <input type="text" name='email' placeholder='Enter Your Email'/>
                     <button className='normal-btn'>Subscibe</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;