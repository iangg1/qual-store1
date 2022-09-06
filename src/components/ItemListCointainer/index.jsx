import {ItemCount} from '../ItemCount/index'
import React from 'react';

export const ItemListCointainer = (texto) => {
  
    const onAdd = (quantity) => {
        console.log('compraste ${quantity} unidades')
    }

    return (
        <>
            <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        </>
  )
}

export default ItemListCointainer;