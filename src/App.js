
//Components
import Login from './pages/Login'
import Home from './pages/Home';
import Canchas from "./pages/Canchas";
import Reservas from "./pages/Reservas" 

//Style
import './styles/App.css';

function App() {

 
  return (
        <div className="App">
          <header className="App-header"></header>
          <Login />
          <Home />
          <Reservas />
          <Canchas />
          
        </div>


  );
}

export default App;
