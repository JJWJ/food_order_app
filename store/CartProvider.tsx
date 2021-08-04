import React, {useReducer} from 'react'
import CartContext from './CartContext'

interface AppProps {
    children: React.ReactNode;
}

interface AppContextInterface {
    items: {
        amount: number;
        price: number;
    }[];
    totalAmount: number;
    addItem: (item:any) => void;
    removeItem: (id:any) => void;
}

type ACTIONTYPE =
    | {type: 'ADD'; item: any }
    | {type: 'REMOVE'; item: any }

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: typeof defaultCartState, action: ACTIONTYPE) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props: AppProps) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = item => {
        dispatchCartAction({type: 'REMOVE', item: item})
    };

    const cartContext: AppContextInterface = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
