import { useContext } from "react"
import { FaTrash } from "react-icons/fa";
import CartContext from "../store/cart-Context"

const CartRow = (props) => {
    const ctx = useContext(CartContext);
    return(
        <tr>
            <td>
                <img
                className="table-img"
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
                    <button className="light-btn table-btn" onClick={props.onRemove}>-</button>
                </span>
                <span>
                    <p>{props.item.amount}</p>
                </span>
                <span>
                    <button className="light-btn table-btn" onClick={props.onAdd}>+</button>
                </span>
                </div>
            </td>
            <td>
                <p>${props.item.price*props.item.amount}</p>
            </td>
            <td>
                <button className="light-btn table-btn" onClick={props.onDelete}>
                <FaTrash></FaTrash>
                </button>
            </td>
        </tr>
    )
}

export default CartRow;