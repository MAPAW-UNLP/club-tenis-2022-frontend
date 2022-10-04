import { useEffect } from 'react'
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
/* import canchasDev from './DevDocs/canchas' */
/* import reservasDev from './DevDocs/reservas'; */

function App() {

  //Todo esto podría ir a la store global:
  const [canchas, setCanchas] = useState([]);
  const [reservas, setReservas] = useState([]);

  const [actCanchas, setActCanchas] = useState(false);
  const [actReservas, setActReservas] = useState(false);
 

  const URL_BASE = `http://localhost:80/api/`;
  useEffect(() =>{
    const requestOptions={
      method: 'GET'
      } ;
   fetch(`${URL_BASE}canchas`, requestOptions)
      .then(response => response.json())
      .then(data =>  setCanchas(data.detail))
    }, [actCanchas]);

    //Con las reservas
    useEffect(() =>{
      const requestOptions={
        method: 'GET'
      };
      fetch(`${URL_BASE}reservas`, requestOptions)
        .then(response => response.json())
        .then(data => setReservas(data.detail))
    }, [actReservas])
 
  return (
    <>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/inicio' element={<Home canchas={canchas} reservas={reservas}/>}></Route>
            <Route path='/canchas' element={<Canchas canchas={canchas} setActCanchas={setActCanchas}/>}></Route>
            <Route path='/reservas' element={<Reservas canchas={canchas} reservas={reservas} setActReservas={setActReservas}/>}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
