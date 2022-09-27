import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';

export const CartWidget = () => {
const {totalProducts} = useCartContext();

    return (
        <>
            <i className="bi bi-cart"></i>
            <span> {totalProducts () || ''}</span>
        </>
        
    )
}

export default CartWidget;