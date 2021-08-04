import React from "react";

interface AppContextInterface {
    items: {
        amount: number;
    }[];
    totalAmount: number;
    addItem: (item:any) => void;
    removeItem: (id:any) => void;
}


const CartContext = React.createContext<AppContextInterface>({
    items: [],
    totalAmount: 0,
    addItem: (item:any) => {},
    removeItem: (id:any) => {},
});

export default CartContext;