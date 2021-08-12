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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submittingError, setSubmittingError] = useState(null)
    const [orderSubmitted, setOrderSubmitted] = useState(false)
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (item: Item ) => {
        cartCtx.removeItem({...item});
    }
    
    const cartItemAddHandler = (item: Item ) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const clearCartHandler = () => {
        cartCtx.clearCart()
    }

    const cartItems = <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} mealName={item.mealName} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item)} onAdd={cartItemAddHandler.bind(null, item)}/>
        ))}
    </ul>

    const checkoutHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData: Inputs) => {
        setIsSubmitting(true);
        try {
        // firebase write only not read for meals possibly can change the call though.
        const response = await fetch('https://react-food-app-88148-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        if(!response.ok){
            throw new Error('Failed to submit cart.')
        }
        } catch (error) {
            setSubmittingError(error.message)
        }
        setIsSubmitting(false)
        setOrderSubmitted(true)
        clearCartHandler()
    }

    const modalActions = (
            <div className='text-right'>
                <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white' onClick={props.onClose}>Close</button>
                {hasItems && <button className='cursor-pointer bg-transparent border border-solid border-red-700 py-2 px-4 rounded-3xl ml-4 text-white bg-red-700 hover:bg-red-800 hover:border-red-800 hover:text-white' onClick={checkoutHandler}>Order</button>}
            </div>
    )

    const cartModalContent = <React.Fragment>
            {cartItems}
            <div className='flex justify-between items-center font-bold text-2xl my-4 mx-0'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler}  onCancel={props.onClose} />}
            {!isCheckout && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <React.Fragment>
      <section className='text-center text-black text-xl flex justify-center items-center'>
        <span>
          <svg className='animate-spin mr-4 h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        <p>Submitting your order...</p>
      </section>
    </React.Fragment>

    const submittingErrorModalContent = <React.Fragment>
      <section className='text-center text-red-600 text-4xl font-bold mt-12'>
        <p>{submittingError}</p>
      </section>
    </React.Fragment>

    const orderSubmittedModal = <React.Fragment>
        <p className='text-center text-xl'>Order successfully submitted</p>
    </React.Fragment>

    return (
        <Modal selector='#overlays' onClick={props.onClose}>
            {!isSubmitting && !submittingError && !orderSubmitted && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {submittingError && submittingErrorModalContent}
            {orderSubmitted && orderSubmittedModal}
        </Modal>
    )
}

export default Cart
