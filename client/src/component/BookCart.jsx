import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const BookCart = (props) => {
  return (
    <div>
          <div className="card">
                       <img src={props.srcImg} alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>{props.title}</h2>
                            <p>{props.price}</p>
                            <button className='normal-btn'><span><FaCartPlus></FaCartPlus></span> Add To Cart</button></div>
                  </div>
    </div>
  )
}

export default BookCart