  import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
// import {FunkoM} from './components/props/props';
import Navbar from './components/navegate/Navbar'
// import Inicio from './components/pages/Inicio'
// import Funko from './components/pages/Funko'
// import Items from './components/pages/Items'
import {ItemListCointainer} from './components/ItemListCointainer/index';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  
  
  return (
    <div className="App">


        <Router>

        <Navbar/>
        <h1>Funkos</h1>

        <Routes>
          <Route path='/inicio' element={<ItemListCointainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListCointainer />} />
          <Route path='/cart' element={<ItemListCointainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>

        </Router>


      </div>
  );
}

export default App;