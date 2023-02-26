import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = (props) => {
  return (
    <div>
        <div className='hero section-p'>
            <div className='hero-content'>
                <p className='latter-space'>{props.toptext}</p>
                <h1>{props.title}</h1>
                <span>{props.name1}</span> 
                <span>{props.name2}</span>
               <div className='para'>
               <p>
                    {props.desc}
                </p>
               </div>
               <div>
                    <Link to="/Shop"><button className='normal-btn'>Shop</button></Link>
                    <Link to="/Contact"><button className='light-btn'>Contact</button></Link>
               </div>
            </div>
            <div className='hero-img'>
                <img src={props.imgsrc}/>
            </div>
        </div>
    </div> 
  )
}

export default Hero