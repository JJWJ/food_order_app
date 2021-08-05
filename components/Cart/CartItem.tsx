import React from 'react'


interface AppProps {
    id?: string | undefined;
    mealName: string;
    amount: number;
    price: number;
    onRemove: () => void;
    onAdd: () => void;
}

const CartItem = (props: AppProps) => {
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className='flex justify-between items-center border-b border-solid border-red-700 py-4 px-0 my-4 mx-0'>
            <div>
                <h2 className='mx-0 mt-0 mb-2 text-gray-800'>{props.mealName}</h2>
                <div className='w-40 flex justify-between items-center'>
                    <span className='font-bold text-red-700'>{price}</span>
                    <span className='font-bold border border-solid border-gray-300 rounded-md text-gray-800'>{props.amount}</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <button className='font-bold text-xl text-red-700 border border-solid border-red-700 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-red-700 hover:text-white active:text-white active:bg-red-700' onClick={props.onRemove}>-</button>
                <button className='font-bold text-xl text-red-700 border border-solid border-red-700 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-red-700 hover:text-white active:text-white active:bg-red-700' onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem
