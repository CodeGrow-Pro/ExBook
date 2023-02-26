import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import CartContext from '../store/cart-Context'

const BookCart = (props) => {
  const ctx = useContext(CartContext);
  const addToCart = (item)=> {
    // const cartCtx = ctx.addItem(item);
    
  }
  return (
    <div>
          <div className="card">
                       <img src={props.item.srcImg} alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>{props.item.title}</h2>
                            <p>{props.price}</p>
                            <button className='normal-btn' onClick={addToCart(props.item)}><span><FaCartPlus></FaCartPlus></span> Add To Cart</button></div>
                  </div>
    </div>
  )
}

export default BookCart;