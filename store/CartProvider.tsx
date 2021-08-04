import React, {useReducer} from 'react'
import CartContext from './CartContext'

interface AppProps {
    children: React.ReactNode;
}

type Item = {
    id?: string | undefined;
    mealName: string;
    amount: number;
    price: number;
}

interface AppContextInterface {
    items: Item[];
    totalAmount: number;
    addItem: (item:Item) => void;
    removeItem: (id:string) => void;
}

type ACTIONTYPE =
    | {type: 'ADD'; item: Item }
    | {type: 'REMOVE'; id: string }


interface IDefaultCartState {
    items: Array<Item>;
    totalAmount: number;
}

const defaultCartState: IDefaultCartState = {
    items : [],
    totalAmount: 0
}

const cartReducer = (state: IDefaultCartState  , action: ACTIONTYPE) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        // const updatedItems: Array<Item> = [...state.items, action.item]
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

    const addItemToCartHandler = ( item: Item) => {
        dispatchCartAction({type: 'ADD', item })
    };

    const removeItemFromCartHandler = ( id: string ) => {
        dispatchCartAction({type: 'REMOVE', id })
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
