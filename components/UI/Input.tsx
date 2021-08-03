import React from 'react'

interface AppProps {
    label: string;
    input: {
        id: string;
        type: string;
        value?: string;
        placeholder?: string;
        min?: string;
        max?: string;
        minlength?: string;
        maxlength?: string;
        step?: string;
        defaultValue?: string;
    }
}

const Input = (props: AppProps) => {
    return (
        <div className='flex items-center mb-2'>
           <label htmlFor={props.input.id} className='font-bold mr-4'>{props.label}</label> 
           <input {...props.input} className='w-12 rounded border border-solid border-gray-400 pl-2'/>
        </div>
    )
}

export default Input
