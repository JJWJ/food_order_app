import React from 'react'
import Image from 'next/image';
import foodSpread from '../../public/rumman-amin-nKs-oXRGGEg-unsplash.jpg';

const Header = () => {
    return (
        <React.Fragment>
            <header className='fixed top-0 left-0 w-full h-20 text-white flex justify-between items-center py-0 px-4 shadow-sm z-10 bg-yellow-800'>
                <h1>OrderFromUs</h1>
                <button>Cart</button>
            </header>
            <div className='w-full h-96 z-0 overflow-hidden'>
                <Image src={foodSpread} alt='Picture of a table with a spread covering all major food groups' className='w-full h-full object-cover transform -rotate-6 -translate-y-16 -translate-x-4'></Image>
            </div>
        </React.Fragment>
    )
}

export default Header
