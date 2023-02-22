import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
        <div className='hero section-p'>
            <div className='hero-content'>
                <p className='latter-space'>Best Management</p>
                <h1>Think and Grow Rich</h1>
                <span>Napoleon Hill </span> 
                <span>Business & Strategy</span>
               <div className='para'>
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero quo dignissimos 
                    ratione incidunt sequi? Beatae explicabo voluptatibus a
                    met veniam deserunt aliquid, magni facilis quidem possimus ratione soluta facere culpa.
                </p>
               </div>
               <div>
                    <button className='normal-btn'>Shop</button>
                    <button className='light-btn'>Contact</button>
               </div>
            </div>
            <div className='hero-img'>
                <img src='https://bookland.dexignzone.com/react/demo/static/media/banner-media3.23487455a35fbb0c6504.png'/>
            </div>
        </div>
    </div> 
  )
}

export default Hero