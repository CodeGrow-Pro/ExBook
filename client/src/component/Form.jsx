import React from 'react'
import './Form.css'
const Form = () => {
    
   const  handleClick = (e)=>{
    e.preventDefault()

   }
  return (
    <div>
        <section className='secrtion-p register'>
            <div className="forms">
                <h1 className='logo'>Registration</h1>
                <p>If you don't have an account with us, please Registration.</p>
                <form >
                    <label>Username </label>
                    <input type="text"  placeholder='enter username '/>
                    <label>Email </label>
                    <input type="text"  placeholder='example@gmail.com'/>
                    <label>Password </label>
                    <input type="text"  placeholder='* * * * * * * * * * *'/>
                    <label>User Type </label>
                    <select name="usertype" >
                        <option selected>choose usertype</option>
                        <option value="CUSTOMER">Customer</option>
                        <option value="SALLER">Saller</option>
                    </select>
                    <button className='normal-btn' onClick={handleClick}>Register</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Form