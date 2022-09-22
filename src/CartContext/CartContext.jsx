import React, { Children, useState, useContext } from 'react'
export const CartContext =  React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter (prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity});
    setCart(newCart)
  }
  
  console.log('carrito: ', cart)

  const clearCart = () => setCart([]); 
  
  const IsInCart = (id) => cart.find (product => product.id === id) ? true : false;
  
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  
  return (
    <CartContext.Provider value={{
      clearCart,
      IsInCart,
      removeProduct,
      addProduct
    }}>

        {children}

    </CartContext.Provider>
  )
}

export default CartProvider;

