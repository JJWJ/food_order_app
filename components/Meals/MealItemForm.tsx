import React from 'react'
import Input from '../UI/Input'

interface AppProps {
    id: string;
}

const MealItemForm = (props: AppProps) => {
    return (
        <form action="/" className='text-right'>
            <Input label='Amount' input={{
                id: 'amount_' + props.id ,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button className='cursor-pointer text-white font-bold bg-red-700 border border-solid border-red-700 py-1 px-4 rounded-3xl hover:bg-red-800 hover:border-red-800'>+ Add</button>
        </form>
    )
}

export default MealItemForm
