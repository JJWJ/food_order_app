import React from "react";

interface Item {
    id?: string | undefined;
    mealName: string;
    amount: number;
    price: number;
}

interface AppContextInterface {
    items: Item[];
    totalAmount: number;
    addItem: (item: Item ) => void;
    removeItem: (id:string) => void;
}


const CartContext = React.createContext<AppContextInterface>({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
});

export default CartContext;