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

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, AppProps>((props, ref) => {
    return (
        <div className='flex items-center mb-2'>
           <label htmlFor={props.input.id} className='font-bold mr-4'>{props.label}</label> 
           <input ref={ref} {...props.input} className='w-12 rounded border border-solid border-gray-400 pl-2'/>
        </div>
    )
})

// Arrow functions display name will be changed to ForwardRef so it must be explicitly set to override this
Input.displayName = 'Input';

export default Input
