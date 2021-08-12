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
    removeItem: (item:Item) => void;
    clearCart: () => void;
}

type ACTIONTYPE =
    | {type: 'ADD'; item: Item }
    | {type: 'REMOVE'; item: Item }
    | {type: 'CLEAR';}


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
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems: Array<Item> | null = [];

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems: Array<Item> | null = [];
        if (existingItem.amount === 1){
            updatedItems = state.items.filter( item => item.id !== action.item.id)
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
}

const CartProvider = (props: AppProps) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = ( item: Item) => {
        dispatchCartAction({type: 'ADD', item })
    };

    const removeItemFromCartHandler = ( item: Item ) => {
        dispatchCartAction({type: 'REMOVE', item })
    };

    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'})
    }

    const cartContext: AppContextInterface = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
