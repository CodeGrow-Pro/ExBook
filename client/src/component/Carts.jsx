import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Carts.css";
const axios = require('axios');

const Carts = () => {
  var [quantity,setQuantity] = useState(1)
  let navigate = useNavigate();

  const handleMinus = ()=>{
       if(quantity>0){
        setQuantity(quantity--)
       }
  }
  const handlePluse = ()=>{
    setQuantity(++quantity)
  }
  const submitHandler = (event)=> {
    event.preventDefault();
    let path = '/checkOrder';
    navigate(path);
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
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="table-img"
                    src="https://bookland.dexignzone.com/react/demo/static/media/book3.595225bfbdedd0ea74e3.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <p>Battle Drive</p>
                </td>
                <td>
                  <p>$28</p>
                </td>
                <td>
                  <div className="quantity">
                    <span>
                      <button className="light-btn table-btn" onClick={handleMinus}>-</button>
                    </span>
                    <span>
                      <p>{quantity}</p>
                    </span>
                    <span>
                      <button className="light-btn table-btn" onClick={handlePluse}>+</button>
                    </span>
                  </div>
                </td>
                <td>
                  <p>${28*quantity}</p>
                </td>
                <td>
                  <button className="light-btn table-btn">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
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
