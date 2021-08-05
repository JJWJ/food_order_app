import React, { useContext, useEffect, useState } from 'react'
import {ShoppingCartIcon} from '@heroicons/react/solid'
import CartContext from '../../store/CartContext'

interface AppProps {
    onClick: () => void
}

const HeaderCartButton = (props:AppProps) => {
    const [btnBounce, setBtnBounce] = useState(false)
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const {items} = cartCtx

    const btnClass = `${'cursor-pointer border-0 bg-yellow-800 text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-yellow-900'} + ${ btnBounce ? 'animate-bounce': ''}`

    useEffect(() => {
        if(items.length === 0){
            return
        }
        setBtnBounce(true)
        const timer = setTimeout(() => {
            setBtnBounce(false)
        }, 1000)

        // Cleanup function for timeout
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <React.Fragment>
            {/* Aria-label will take over the button name */}
            {/* name by itself will be overwritten by the content if no aria-label is present */}
            {/* <button aria-label='shopping cart' className='cursor-pointer border-0 bg-yellow-800 text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-yellow-900' onClick={props.onClick}> */}
            <button aria-label='shopping cart' className={btnClass} onClick={props.onClick}>
               <span><ShoppingCartIcon className='h-5 w-5 mr-2 '/></span>
               <span>Your Cart</span>
               <span className='bg-yellow-600 py-1 px-4 rounded-md ml-4 font-bold hover:bg-yellow-900'>{numberOfCartItems}</span>
            </button> 
        </React.Fragment>
    )
}

export default HeaderCartButton
