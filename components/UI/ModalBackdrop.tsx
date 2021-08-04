import React from 'react'

interface AppProps {
    onClick: () => void
}

const ModalBackdrop = (props: AppProps) => {
    return (
        <div title='ModalBackdrop' className='fixed top-0 left-0 w-full h-screen z-20 bg-opacity-25 bg-black' onClick={props.onClick}>
            
        </div>
    )
}

export default ModalBackdrop
