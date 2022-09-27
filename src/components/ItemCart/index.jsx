import React from 'react'
import { CartContext, useCartContext } from '../../CartContext/CartContext'

export const ItemCart= ({ product }) => {
  const {removeProduct} = useCartContext();  
  return (
    <div>
        <img src = {product.image} alt={product.title} width='500px' height='350px' />
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price}</p>
            <p>Subtotal: $ {product.price*product.quantity}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart