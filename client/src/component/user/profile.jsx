import React from 'react'
import { FaCaretRight, FaCartPlus, FaShoppingBasket, FaShoppingCart, FaUnlock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css'
const Profile = () => {
  return (
    <div>
      <section className="profile section-p">
        <div className="profile-left">
              <div className="profile-card">
                  <div className="profile-info">
                  <img src="https://bookland.dexignzone.com/react/demo/static/media/profile3.1ce71c78fc4bb5daa9ad.jpg" alt="" />
                   <h1 className='logo'>David Matin</h1>
                   <p>Web developer</p>
                  </div>
              </div>
              <div className="sidebar">
                       <ul>
                       <Link to="/user" id='activeblock'><li><span><FaUser></FaUser></span>Profile</li></Link>
                       <Link to="/Cart"><li><span><FaShoppingCart></FaShoppingCart></span>My Cart</li></Link>
                       <Link to="/Shop"><li><span><FaShoppingBasket></FaShoppingBasket></span>Shop</li></Link>
                       <Link to="/logout"><li><span><FaUnlock></FaUnlock></span>Logout</li></Link>
                       </ul>
              </div>
        </div>
        <div className="profile-info-right">
             <div className="title">
              <h1 className='logo'>BASIC INFORMATION</h1>
             </div>
         <div className="inputs">
         <div className="left">
            <p>Your Name</p>
                <input type="text" placeholder='David Matin'/>
            </div>
            <div className="right">
            <p>Professional title</p>
                <input type="text" placeholder='Web developer'/>
            </div>
         </div>
         <div className="inputs">
         <div className="left">
            <p>Languages</p>
                <input type="text" placeholder='Hindi , English'/>
            </div>
            <div className="right">
            <p>Age</p>
                <input type="text" placeholder='Age'/>
            </div>
         </div>
         <div className="title">
              <h1 className='logo'>CONTACT INFORMATION</h1>
             </div>
             <div className="inputs">
         <div className="left">
            <p>Contact Number </p>
                <input type="text" placeholder='+91 9023 1948 32'/>
            </div>
            <div className="right">
            <p>E-mail Address</p>
                <input type="text" placeholder='Example@gmail.com'/>
            </div>
         </div>
         <div className="inputs">
         <div className="left">
            <p>Full Address </p>
                <input type="text" placeholder='Near Noida sector 18'/>
            </div>
            <div className="right">
            <p>City</p>
                <input type="text" placeholder='Noida'/>
            </div>
         </div>
         <button className='normal-btn'>Save</button>
        </div>
     </section>
    </div>
  )
}

export default Profile;  
