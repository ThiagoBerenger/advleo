import React from 'react';
import './ArrowUp.modules.css';
import { IoMdArrowDropup } from "react-icons/io";

const ArrowUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='arrow-box' onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <IoMdArrowDropup className='arrow' />
        </div>
    );
}

export default ArrowUp;
