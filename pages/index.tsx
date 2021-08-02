import React from 'react'
import Header from '../components/Layout/Header'
import Meals from '../components/Meals/Meals'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  )
}