import React from 'react'

const Checkout = () => {
    return (
        <form action="" className='my-4 mx-0 h-80 overflow-auto'>
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
            <button>Confirm</button>
        </form>
    )
}

export default Checkout
