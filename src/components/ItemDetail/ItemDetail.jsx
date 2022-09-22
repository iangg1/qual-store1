import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom'
import {FunkoM2} from '../props/props';
import { useCartContext } from '../../CartContext/CartContext';

 const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
      setGoToCart (true);
      addProduct(data, quantity);
  }


  return (
        <>
        <FunkoM2
         image={data.image}
         name={data.title}
         type={data.type}
         serie={data.serie}
         precio={data.price}
         />
        {
          goToCart
            ? <Link to='/carrito'>Sigue aqui para finalizar tu compra!</Link>
            : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        }
       </>
  )
}

export default ItemDetail
