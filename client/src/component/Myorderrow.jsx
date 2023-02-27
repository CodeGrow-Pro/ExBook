import React from 'react'
import './Myorderrow.css'
import './Carts.css'
const Myorderrow = () => {
  return (
        <tr>
            <td>
                <img
                className="table-img"
                src="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                alt="images"
                />
            </td>
            <td>
                <p>Real life</p>
            </td>
            <td>
                <p>$ {250}</p>
            </td>
            <td>
                <div className="quantity">
                <span>
                    <p>{1}</p>
                </span>
                </div>
            </td>
            <td>
                $250
            </td>
            <td>
                Pending
            </td>
            <td>
                <button className="light-btn">
                 Cancel
                </button>
            </td>
        </tr>
        
  )
}

export default Myorderrow