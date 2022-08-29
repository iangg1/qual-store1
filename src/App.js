// import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegate/Navbar'
import Inicio from './components/pages/Inicio'
import Funko from './components/pages/Funko'
import Items from './components/pages/Items'


function App() {
  
  
  return (
    <div className="App">
        <Router>

        <Navbar/>

        </Router>
    </div>
  );
}

export default App;