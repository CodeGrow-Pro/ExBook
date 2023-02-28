import React from 'react'
import './Myorderrow.css'
import './Carts.css'
import { FaCheckCircle, FaCross } from 'react-icons/fa'
const Myorderrow = (props) => {
  return (
        <tr>
            <td>
                <img
                className="table-img round"
                src={props.item.coverpage}
                alt="images"
                />
            </td>
            <td>
                <p>{props.item.name}</p>
            </td>
            <td>
                <p>$ {props.item.price}</p>
            </td>
            <td>
                <div className="quantity">
                <span>
                    <p>{props.item.amount}</p>
                </span>
                </div>
            </td>
            <td>
                $ {props.item.price * props.item.amount}
            </td>
            <td>
                {props.status=='success' ? <span className='success'><FaCheckCircle></FaCheckCircle></span>:<span className='failed'>Failed</span>}
            </td>
            <td>
                <button className="light-btn  mybutton">
                 Cancel
                </button>
            </td>
        </tr>
  )
}

export default Myorderrow