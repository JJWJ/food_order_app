import React from 'react'
import Modal from '../UI/Modal'

interface AppProps {
    onClose: () => void
}

const Cart = (props: AppProps) => {
    const cartItems = <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
        {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>

    return (
        <Modal selector='#overlays' onClick={props.onClose}>
            {cartItems}
            <div className='flex justify-between items-center font-bold text-2xl my-4 mx-0'>
                <span>Total Amount</span>
                <span>25.98</span>
            </div>
            <div className='text-right'>
                <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white' onClick={props.onClose}>Close</button>
                <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-white bg-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white'>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
