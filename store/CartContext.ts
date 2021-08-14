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
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<AppContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
