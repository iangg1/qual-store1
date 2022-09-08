import React from 'react'
import './item.css';
import {FunkoM} from '../props/props';

const Item = ({dato}) => {
  return (
      <FunkoM
         image={dato.image}
         name={dato.title}
         type={dato.type}
         serie={dato.serie}
         precio={dato.price}
         />
         
  )
}

export default Item;