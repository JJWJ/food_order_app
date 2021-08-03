import React from 'react'
import Cart from '../components/Cart/Cart'
import Header from '../components/Layout/Header'
import Meals from '../components/Meals/Meals'

export default function Home() {
  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main className='bg-gray-600 min-h-screen'>
        <Meals/>
      </main>
    </React.Fragment>
  )
}
