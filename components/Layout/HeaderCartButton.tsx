import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/solid'

interface AppProps {
    onClick: () => void
}

const HeaderCartButton = (props:AppProps) => {
    return (
        <React.Fragment>
            {/* Aria-label will take over the button name */}
            {/* name by itself will be overwritten by the content if no aria-label is present */}
            <button aria-label='shopping cart' className='cursor-pointer border-0 bg-yellow-800 text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-yellow-900' onClick={props.onClick}>
               <span><ShoppingCartIcon className='h-5 w-5 mr-2 '/></span>
               <span>Your Cart</span>
               <span className='bg-yellow-600 py-1 px-4 rounded-md ml-4 font-bold hover:bg-yellow-900'>3</span>
            </button> 
        </React.Fragment>
    )
}

export default HeaderCartButton
