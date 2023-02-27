import CartContext from "./cart-Context";
import { useReducer } from "react";

const defaulCartState = {
    items: [],
    totalAmount : 0
}
const cartReducer = (state, action)=> {
    if(action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price*1;
        const existingCartItemIndex = state.items.findIndex(item => item._id === action.item._id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updateItem;
        } else {
            updatedItems = [...state.items, action.item];
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if(action.type === 'REMOVE' || action.type=='CLEAR') {
        const existingCartItemIndex = state.items.findIndex(item => item._id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1 || (existingCartItem.amount === action.amount && action.type==='CLEAR')) {
            updatedItems = state.items.filter(item => item !== existingCartItem);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaulCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaulCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }
    const clearCartHandler = (id,amount) => {
        dispatchCartAction({type: 'CLEAR',id:id,amount:amount});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;