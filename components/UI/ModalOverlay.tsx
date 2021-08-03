import React from 'react'

interface AppProps {
    children: React.ReactNode;
}

const ModalOverlay = (props:AppProps) => {
    return (
        <div className='fixed top-1/5-vh left-1/20 w-11/12 bg-white p-4 rounded-xl shadow-md z-30 animate-slide-down md:w-160 md:left-calcLeft'>
           <div>{props.children}</div> 
        </div>
    )
}

export default ModalOverlay
