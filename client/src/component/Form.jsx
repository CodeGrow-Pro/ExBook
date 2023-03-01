import React, { useState } from 'react'
import axios from 'axios';
import './Form.css'
const Form = () => {
    const [user,setUser] = useState({
            name:'',
            email:'',
            password:'',
            userType:''
    })
    const onChangeEvent = (event)=>{
        const {name , value} = event.target
        setUser((Preval)=>{
            return {
                ...Preval ,
                [name]:value
            }
        })
    }
   const  handleClick = async (e)=>{
    setUser('')
    e.preventDefault()
        const response = await axios.post('/ExBook/api/v1/user/signup',user).then((res)=>{
            window.location.href = '/ui/login'
        }).catch((err)=>{
            console.log(err)
            alert('something want wrong! Please try after some time.')
        })
       
   }
  return (
    <div>
        <section className='secrtion-p register'>
            <div className="forms">
                <h1 className='logo'>Registration</h1>
                <p>If you don't have an account with us, please Registration.</p>
                <form >
                    <label>Username </label>
                    <input type="text" name="name" placeholder='enter username ' onChange={onChangeEvent} value={user.name}/>
                    <label>Email </label>
                    <input type="text"  name="email" placeholder='example@gmail.com'onChange={onChangeEvent} value={user.email}/>
                    <label>Password </label>
                    <input type="text" name="password" placeholder='* * * * * * * * * * *' onChange={onChangeEvent} value={user.password}/>
                    <label>User Type </label>
                    <select name="userType" onChange={onChangeEvent}>
                        <option selected>choose usertype</option>
                        <option value="CUSTOMER">Customer</option>
                        <option value="SELLER">Seller</option>
                    </select>
                    <button className='normal-btn' onClick={handleClick}>Register</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Form