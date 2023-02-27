import { Outlet } from "react-router-dom";
import CartProvider from "../store/cartProvider";

const MyContextOutlet = () => {
    return (
        <CartProvider>
            <Outlet />
        </CartProvider>
    )
}

export default MyContextOutlet;