import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <div>
       <div className="headers">
        <div className="headerContainer">
            <h1>{props.heading}</h1>
            <button></button>
        </div>
       </div>
    </div>
  ) 
}

export default Header