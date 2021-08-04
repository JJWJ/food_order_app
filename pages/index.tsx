import React, { useState } from 'react'
import Cart from '../components/Cart/Cart'
import Header from '../components/Layout/Header'
import Meals from '../components/Meals/Meals'
import CartProvider from '../store/CartProvider';

export default function Home() {
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const showCartHandler = () => {
    setCartIsShowing(true);
  }

  const hideCartHandler = () => {
    setCartIsShowing(false);
  }

  return (
    <CartProvider>
      {cartIsShowing && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart={showCartHandler}/>
      <main className='bg-gray-600 min-h-screen'>
        <Meals/>
      </main>
    </CartProvider>
  )
}
