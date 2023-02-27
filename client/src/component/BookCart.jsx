import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import CartContext from '../store/cart-Context';

const BookCart = (props) => {
  const ctx = useContext(CartContext);
  const addToCart = (item)=> {
    console.log({...item,amount:1})
    ctx.addItem({...item, amount: 1});
  }
  return (
    <div>
          <div className="card">
              <img src={props.srcImg} alt='books' />
              <div className="book">
              <h2 className='heading-h1 '>{props.item.name}</h2>
              <p>$ {props.item.price}</p>
              <button className='normal-btn' onClick={()=>addToCart(props.item)}><span><FaCartPlus></FaCartPlus></span> Add To Cart</button></div>
          </div>
    </div>
  )
}

export default BookCart;