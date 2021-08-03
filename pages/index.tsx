import React from 'react'
import Header from '../components/Layout/Header'
import Meals from '../components/Meals/Meals'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className='bg-gray-600 min-h-screen'>
        <Meals/>
      </main>
    </React.Fragment>
  )
}
