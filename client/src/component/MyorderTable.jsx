import React from 'react'
import Myorderrow from './Myorderrow'
import './MyorderTable.css'
const MyorderTable = () => {
  return (
    <div>
         <section className="myorder-table product-table section-p">
        <div className="tables">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">
                  <Myorderrow />
            </tbody>
          </table>
        </div>
        {/* <div className="checkout">
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
                  <th>
                    <p>
                      <strong>Order Subtotal</strong>
                    </p>
                  </th>
                  <td>
                    <p>$ {0}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>
                      <strong>Shipping</strong>
                    </p>
                  </th>
                  <td>
                    <p>Free Shipping</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>
                      <strong>Coupon</strong>
                    </p>
                  </th>
                  <td>
                    <p>$ {0}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>
                      <strong>Total</strong>
                    </p>
                  </th>
                  <td>
                    <p>$ {ctx.totalAmount}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            {hasItem?<button className="normal-btn checkout-btn" onClick={submitHandler}>
              Proceed To Checkout
            </button>:<button className="normal-btn checkout-btn">
              Please Add Items
            </button>}
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default MyorderTable