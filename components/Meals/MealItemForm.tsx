import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

interface AppProps {
    id: string;
    onAddToCart: (value: number) => void;
}

const MealItemForm = (props: AppProps) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current?.value;
        let enteredAmountNumber: number = 0;
        if (enteredAmount && +enteredAmount){
            enteredAmountNumber = +enteredAmount
        }

        if (enteredAmount?.trim().length === 0 || enteredAmountNumber! < 1 || enteredAmountNumber! > 5){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber);
        
    }


    return (
        <form action="/" className='text-right' onSubmit={submitHandler}>
            <Input label='Amount' ref={amountInputRef} input={{
                id: 'amount_' + props.id ,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}/>
            <button className='cursor-pointer text-white font-bold bg-red-700 border border-solid border-red-700 py-1 px-4 rounded-3xl hover:bg-red-800 hover:border-red-800'>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm
