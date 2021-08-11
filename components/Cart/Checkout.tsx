import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface AppProps {
    onCancel: () => void;
}

type Inputs = {
    name: string;
    street: string;
    postalCode: string; 
    city: string;
}

const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

const Checkout = (props: AppProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    


    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className='my-4 mx-0 h-80 overflow-auto'>
            <div className='mb-2'>
                <label htmlFor="name" className='font-bold mb-1 block'>Your Name</label>
                <input type="text" id='name' {...register('name', {required: true})} className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
                {errors.name && ( <p className='text-red-700'>Name is required</p>)}
            </div>
            <div className='mb-2'>
                <label htmlFor="street" className='font-bold mb-1 block'>Street</label>
                <input type="text" id='street' {...register('street', {required: true})} className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
                {errors.name && ( <p className='text-red-700'>Street is required</p>)}
            </div>
            <div className='mb-2'>
                <label htmlFor="postalCode" className='font-bold mb-1 block'>Postal Code</label>
                <input type="text" id='postalCode' {...register('postalCode', {required: true, minLength: 5, maxLength: 5})} className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
                {errors.postalCode && ''}
                {errors.name && ( <p className='text-red-700'>Postal Code must be 5 characters long.</p>)}
            </div>
            <div className='mb-2'>
                <label htmlFor="city" className='font-bold mb-1 block'>City</label>
                <input type="text" id='city' {...register('city', {required: true})} className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
                {errors.name && ( <p className='text-red-700'>City is required</p>)}
            </div>
            <button type='button' onClick={props.onCancel} className='text-red-700 cursor-pointer bg-transparent border-none rounded-3xl py-2 px-8 hover:bg-red-200 active:bg-red-200 mr-2'>Cancel</button>
            <button type='submit' className='text-white cursor-pointer bg-red-700 border border-solid border-red-700 rounded-3xl py-2 px-8 hover:bg-red-600 active:bg-red-600'>Confirm</button>
        </form>
    )
}

export default Checkout
