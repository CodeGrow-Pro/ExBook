import React from "react";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (id) => {},
    removeItem: (id) => {},
    clearCart: (id,amount)=>{}
})

export default CartContext;