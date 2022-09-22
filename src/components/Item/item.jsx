import React from 'react'
import './item.css';
import {FunkoM} from '../props/props';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';
import { useContext } from 'react';


const Item = ({dato}) => {

  // const nombre = useContext(CartContext);
  // console.log ('Item: ', nombre);

  return (
    
    <Link to={`/detalle/${dato.id}`}>
        <FunkoM
         image={dato.image}
         name={dato.title}
         />
    </Link>
         
  )
}


export default Item;