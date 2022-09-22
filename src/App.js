import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/navegate/Navbar'
import {ItemListCointainer} from './components/ItemListCointainer/index';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {Carrito} from './components/Cart/Cart'
import React from 'react';
import CartProvider from './CartContext/CartContext';




const App = () => {
  
  
  return (
    <div className="App">


        <Router>

        <CartProvider>
        <Navbar/>
        {/* <ItemListCointainer/> */}
        <h1>Funkos</h1>

        <Routes>
          <Route path='/inicio' element={<ItemListCointainer />} />
          <Route path='/' element={<ItemListCointainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListCointainer />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
        </CartProvider>

        </Router>


      </div>
  );
}

export default App;