import React from 'react'

interface AppProps {
    onCancel: () => void;
}


const Checkout = (props: AppProps) => {
    const confirmHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }

    return (
        <form action="" onSubmit={confirmHandler} className='my-4 mx-0 h-80 overflow-auto'>
            <div className='mb-2'>
                <label htmlFor="name" className='font-bold mb-1 block'>Your Name</label>
                <input type="text" id='name' className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
            </div>
            <div className='mb-2'>
                <label htmlFor="street" className='font-bold mb-1 block'>Street</label>
                <input type="text" id='street' className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
            </div>
            <div className='mb-2'>
                <label htmlFor="postal" className='font-bold mb-1 block'>Postal Code</label>
                <input type="text" id='postal' className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
            </div>
            <div className='mb-2'>
                <label htmlFor="city" className='font-bold mb-1 block'>City</label>
                <input type="text" id='city' className='border border-solid border-gray-200 rounded w-80 max-w-full '/>
            </div>
            <button type='button' onClick={props.onCancel} className='text-red-700 cursor-pointer bg-transparent border-none rounded-3xl py-2 px-8 hover:bg-red-200 active:bg-red-200 mr-2'>Cancel</button>
            <button className='text-white cursor-pointer bg-red-700 border border-solid border-red-700 rounded-3xl py-2 px-8 hover:bg-red-600 active:bg-red-600'>Confirm</button>
        </form>
    )
}

export default Checkout
