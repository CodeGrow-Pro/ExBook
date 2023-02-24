import React from 'react'
import './Header.css'
const Header = (props) => {
  const Relocate = ()=>{
    window.location.href = "/"
  }
  return (
    <div>
       <div className="headers" id={props.error}>
        <div className="headerContainer">
            <h1>{props.heading}</h1>
            <h1>
                  {props.text}
            </h1>
            <button className={props.cls} onClick={Relocate}>{props.btn}</button>
        </div>
       </div>
    </div>
  ) 
}

export default Header