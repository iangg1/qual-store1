import React from 'react'
import ItemCount from '../ItemCount'
import {FunkoM2} from '../props/props';


 const ItemDetail = ({data}) => {
  return (
        <>
        <FunkoM2
         image={data.image}
         name={data.title}
         type={data.type}
         serie={data.serie}
         precio={data.price}
         />
        <ItemCount initial={1} stock={10}/>
       </>
  )
}

export default ItemDetail
