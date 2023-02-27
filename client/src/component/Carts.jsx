import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/cart-Context";
import CartRow from "./CartRow";
import "./Carts.css";
const axios = require('axios');

const Carts = () => {
  let navigate = useNavigate();
  const ctx = useContext(CartContext);
  console.log(ctx.items)
  // var [quantity,setQuantity] = useState(ctx.items)
  
  const submitHandler = (event)=> {
    event.preventDefault();
    let path = '/checkOrder';
    navigate(path);
  }
  const addItem = (item)=>{
        ctx.addItem(item)
  }
  const removeItem =(id)=>{
          ctx.removeItem(id)
  }
  return (
    <div>
      <section className="product-table section-p">
        <div className="tables">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {ctx.items.map((item,index) => {
                return(
                  <CartRow key={index} onAdd={addItem.bind(null,item)} onRemove = {removeItem.bind(null,item._id)}  item={item} />
                ) 
              })}
            </tbody>
          </table>
        </div>
        <div className="checkout">
          <div className="coupon">
            <div className="coupon-title">
                <h1>Apply Coupon</h1>
            </div>
            <div className="coupon-input">
              <input type="text" placeholder="Apply Coupon" />
              <button className="normal-btn">Apply</button>
            </div>
          </div>
          <div className="checkout-subtotal">
          <div className="coupon-title">
                <h1>CART SUBTOTAL</h1>
            </div>
            <table className="table-2">
                  <tbody>
                  <tr>
                        <th><p><strong>Order Subtotal</strong></p></th>
                        <td><p>$542.22</p></td>
                    </tr>
                    <tr>
                        <th><p><strong>Shipping</strong></p></th>
                        <td><p>Free Shipping</p></td>
                    </tr>
                    <tr>
                        <th><p><strong>Coupon</strong></p></th>
                        <td><p>$542.22</p></td>
                    </tr>
                    <tr>
                        <th><p><strong>Total</strong></p></th>
                        <td><p>$542.22</p></td>
                    </tr>
                  </tbody>
            </table>
            <button className="normal-btn checkout-btn" onClick={submitHandler}>Proceed To Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carts;
