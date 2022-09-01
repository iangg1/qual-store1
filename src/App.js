  import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FunkoM} from './components/props/props';
import Navbar from './components/navegate/Navbar'
import Inicio from './components/pages/Inicio'
import Funko from './components/pages/Funko'
import Items from './components/pages/Items'



const App = () => {
  
  
  return (
    <div className="App">
        <Router>

        <Navbar/>

        </Router>

        <h1>Funkos</h1>
        <hr/>
        <FunkoM
            name="Tanjiro Kamado"
            type="Anime"
            serie="Demon Slayer"
            image="./TanjiroKamado.jpg"
            />    
      </div>
  );
}

export default App;