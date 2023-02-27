import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import CartContext from '../store/cart-Context';

const BookCart = (props) => {
  const ctx = useContext(CartContext);
  const addToCart = (item)=> {
    ctx.addItem({...item, amount: 1});
  }
  return (
    <div>
          <div className="card">
              <img src={props.Item.coverpage} alt='books' />
              <div className="book">
              <h2 className='heading-h1 '>{props.Item.name}</h2>
              <p>$ {props.Item.price}</p>
              <button className='normal-btn' onClick={()=>addToCart(props.Item)}><span><FaCartPlus></FaCartPlus></span> Add To Cart</button></div>
          </div>
    </div>
  )
}

export default BookCart;