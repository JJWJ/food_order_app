import React from 'react'
import MealItemForm from './MealItemForm'

interface AppProps {
    id?: string;
    mealName: string;
    description: string;
    price: number;
    children?: React.ReactNode;
}

const MealItem = (props:AppProps) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className='flex justify-between m-4 pb-4 border-b border-solid border-gray-400'>
            <div>
                <h3 className='mx-0 mt-0 mb-1 font-bold'>{props.mealName}</h3>
                <div className='italic'>{props.description}</div>
                <div className='mt-1 font-bold text-lg text-yellow-400'>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id || 'G' + Math.floor(Math.random() * 10).toString()}/>
            </div>
        </li>
    )
}

export default MealItem
