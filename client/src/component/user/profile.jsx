import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCaretRight, FaCartPlus, FaShoppingBasket, FaShoppingCart, FaUnlock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css'
const Profile = () => {
   const redirect = (isLogin)=>{
    if(!isLogin){
        window.location = '/ui/login'
    }
   }
   if(!localStorage.getItem("token")){
   window.onload(redirect(localStorage.getItem("token")))
   }
    const token = {
        Authorization:'Bearer '+localStorage.getItem("token")
    }
    let [user,setUser] = useState({
         name: "",
        email: "",
        userType: "",
        language:"",
        age:"",
        address:"",
        mobileNo:"",
        city:""
    })
    const getUserData = async ()=>{
          axios({
            method:"GET",
            url:'http://localhost:8000/ExBook/api/v1/user/find',
           headers:token
        }).then((res)=>{
            setUser(res.data.user)
        }).catch((err)=>{
            console.log(err.message)
            alert("Something went wrong!")
        })
    }
    const updateUser = ()=>{
        axios({
            method:"PUT",
            url:"http://localhost:8000/ExBook/api/v1/user/update",
            data:user,
            headers:token
        }).then((resolve)=>{
            alert("Profile Update successfully")
        }).catch((err)=>{
            alert("Profile update failed! Try Again!")
        })
    }
    useEffect(()=>{
        getUserData()
    },[])
    const updateOnClick = (e)=>{
      e.preventDefault()
      updateUser()
    }
    const handleChange = (e)=>{
        const {name , value} = e.target
        setUser({...user,[name]:value})
    }
    const logout = ()=>{
        localStorage.setItem("token","")
    }
  return (
    <div>
      <section className="profile section-p">
        <div className="profile-left">
              <div className="profile-card">
                  <div className="profile-info">
                  <img src="https://bookland.dexignzone.com/react/demo/static/media/profile3.1ce71c78fc4bb5daa9ad.jpg" alt="" />
                   <h1 className='logo'>{user.name}</h1>
                   <p>{user.userType}</p>
                  </div>
              </div>
              <div className="sidebar">
                       <ul>
                       <Link to="/user" id='activeblock'><li><span><FaUser></FaUser></span>Profile</li></Link>
                       <Link to="/Cart"><li><span><FaShoppingCart></FaShoppingCart></span>My Cart</li></Link>
                       <Link to="/Shop"><li><span><FaShoppingBasket></FaShoppingBasket></span>Shop</li></Link>
                       <Link to="/" onClick={logout}><li><span><FaUnlock></FaUnlock></span>Logout</li></Link>
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
                <input type="text" onChange={handleChange} name="name" defaultValue={user.name} placeholder='David Matin'/>
            </div>
            <div className="right">
            <p>User Type</p>
                <input type="text" onChange={handleChange} className='disable'  disabled name="userType" defaultValue={user.userType} placeholder='Web developer'/>
            </div>
         </div>
         <div className="inputs">
         <div className="left">
            <p>Languages</p>
                <input type="text"  onChange={handleChange}  defaultValue={user.languages}  name="language" placeholder='Hindi , English'/>
            </div>
            <div className="right">
            <p>Age</p>
                <input type="text"  onChange={handleChange} defaultValue={user.age}  name="age" placeholder='Age'/>
            </div>
         </div>
         <div className="title">
              <h1 className='logo'>CONTACT INFORMATION</h1>
             </div>
             <div className="inputs">
         <div className="left">
            <p>Contact Number </p>
                <input type="text" onChange={handleChange} defaultValue={user.mobileNo}   name="mobileNo" placeholder='+91 9023 1948 32'/>
            </div>
            <div className="right">
            <p>E-mail Address</p>
                <input type="text" onChange={handleChange} className='disable'  disabled name='email' defaultValue={user.email} placeholder='Example@gmail.com'/>
            </div>
         </div>
         <div className="inputs">
         <div className="left">
            <p>Full Address </p>
                <input type="text" name='address'  onChange={handleChange}  defaultValue={user.address}  placeholder='Near Noida sector 18'/>
            </div>
            <div className="right">
            <p>City</p>
                <input type="text"  onChange={handleChange}  name='city' defaultValue={user.city}  placeholder='Noida'/>
            </div>
         </div>
         <button className='normal-btn' onClick={updateOnClick}>Save</button>
        </div>
     </section>
    </div>
  )
}

export default Profile;  
