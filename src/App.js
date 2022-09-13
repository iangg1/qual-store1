  import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
// import {FunkoM} from './components/props/props';
import Navbar from './components/navegate/Navbar'
// import Inicio from './components/pages/Inicio'
// import Funko from './components/pages/Funko'
// import Items from './components/pages/Items'
import {ItemListCointainer} from './components/ItemListCointainer/index';


const App = () => {
  
  
  return (
    <div className="App">

        {/* <BrowserRouter/> */}

        <Router>

        <Navbar/>
        <h1>Funkos</h1>

        <Routes>
          <Route path='/inicio' element={<ItemListCointainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListCointainer />} />
          <Route path='/cart' element={<ItemListCointainer />} />
          <Route path='/detalle' element={<ItemListCointainer />} />
        </Routes>

        </Router>



        {/* <hr/> */}
        {/* <FunkoM
            name="Tanjiro Kamado"
            type="Anime"
            serie="Demon Slayer"
            image="./TanjiroKamado.jpg"
            /> */}
            {/* <ItemListCointainer/> */}
      </div>
  );
}

export default App;