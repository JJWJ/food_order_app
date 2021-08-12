import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartContext'
import Modal from '../UI/Modal'
import CartItem from './CartItem';
import Checkout, { Inputs } from './Checkout';

interface AppProps {
    onClose: () => void
}

interface Item {
    id?: string | undefined;
    mealName: string;
    amount: number;
    price: number;
}

const Cart = (props: AppProps) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (item: Item ) => {
        cartCtx.removeItem({...item});
    }
    
    const cartItemAddHandler = (item: Item ) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} mealName={item.mealName} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item)} onAdd={cartItemAddHandler.bind(null, item)}/>
        ))}
    </ul>

    const checkoutHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = (userData: Inputs) => {
        // firebase write only not read for meals possibly can change the call though.
        fetch('https://react-food-app-88148-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
    }

    const modalActions = (
            <div className='text-right'>
                <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white' onClick={props.onClose}>Close</button>
                {hasItems && <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-white bg-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white' onClick={checkoutHandler}>Order</button>}
            </div>
    )

    return (
        <Modal selector='#overlays' onClick={props.onClose}>
            {cartItems}
            <div className='flex justify-between items-center font-bold text-2xl my-4 mx-0'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler}  onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    )
}

export default Cart
