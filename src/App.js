
//Components
import Login from './pages/Login'
import Home from './pages/Home';
import Canchas from "./pages/Canchas";
import Reservas from "./pages/Reservas" 
//react
import { useState } from 'react';
//Style
import './styles/App.css';

//routes react
import { Routes, Route} from 'react-router-dom'

//canchasDev
import canchasDev from './DevDocs/canchas'
import reservasDev from './DevDocs/reservas';

function App() {

  //Todo esto podría ir a la store global:
  const [canchas, setCanchas] = useState(canchasDev);
  const [reservas, setReservas] = useState(reservasDev);
 
 
  return (
    <>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/inicio' element={<Home canchas={canchas} reservas={reservas}/>}></Route>
            <Route path='/canchas' element={<Canchas canchas={canchas} setCanchas={setCanchas}/>}></Route>
            <Route path='/reservas' element={<Reservas canchas={canchas} reservas={reservas} setReservas={setReservas}/>}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
