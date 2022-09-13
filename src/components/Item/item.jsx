import React from 'react'
import './item.css';
import {FunkoM} from '../props/props';
import { Link } from 'react-router-dom'


const Item = ({dato}) => {
  return (
    
    <a>
        <FunkoM
         image={dato.image}
         name={dato.title}
         type={dato.type}
         serie={dato.serie}
         precio={dato.price}
         />
    </a>
         
  )
}

export default Item;