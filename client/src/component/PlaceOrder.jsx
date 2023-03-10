import './PlaceOrder.css'
import './Form.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PlaceOrder = (props) => {
    const token = {
        Authorization:'Bearer '+localStorage.getItem("token")
    }
    const handleSubmit = (e)=>{
           e.preventDefault()
    }
    const [user,setUser] = useState({
        name: "",
       email: "",
       mobileNo: "",
       address:"",
       city:"",
       state:"",
       payableAmount:""
   })
   const handlechange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target
      setUser({...user,[name]:value})
   }
    const getUserData = async ()=>{
        axios({
          method:"GET",
          url:'https://exbookapis.onrender.com/ExBook/api/v1/user/find',
         headers:token
      }).then((res)=>{
          setUser(res.data.user)
      }).catch((err)=>{
          console.log(err.message)
          alert("Something went wrong!")
      })
  }
    useEffect(()=>{
     getUserData()
    },[])
    props.getUser(user)
  return (
    <div>
          <section className='secrtion-p register'>
            <div className="forms">
                <h1 className='logo'>BILLING & SHIPPING ADDRESS</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input type="text" name="name" onChange={handlechange} placeholder='enter name '  defaultValue={user.name}/>
                    <label>Email </label>
                    <input type="text"  name="email" onChange={handlechange} placeholder='example@gmail.com' defaultValue={user.email}/>
                    <label>Phone No </label>
                    <input type="text" name="mobileNo" onChange={handlechange} placeholder='enter your phone number' defaultValue={user.mobileNo}/>
                    <label>Address</label>
                    <input type="text" name="address" onChange={handlechange} placeholder='Type adress here . . .' defaultValue={user.address}/>
                    <label>City</label>
                    <input type="text" name='city' placeholder='Type city here . . .' defaultValue={user.city}/>
                    <label>State</label>
                    <input type="text" name='state' onChange={handlechange} placeholder='Type state here . . .' defaultValue={user.state}/>
                    <label>Payable Amount</label>
                    <input type="text" name='amount'  className='disable' disabled defaultValue={props.payableAmount}/>
                    {props.children}
                </form>
            </div>
            <div>
            </div>
        </section>
    </div>
  )
}

export default PlaceOrder