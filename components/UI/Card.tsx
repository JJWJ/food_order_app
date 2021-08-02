import React from 'react'

interface AppProps {
    children: React.ReactNode;
}

const Card = (props: AppProps) => {
    return (
        <div className='p-4 shadow-sm rounded-2xl bg-white'>
           {props.children} 
        </div>
    )
}

export default Card
