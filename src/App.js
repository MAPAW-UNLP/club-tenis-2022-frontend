import { useEffect } from 'react'
import { useState } from 'react';
//Components
import Login from './pages/Login'
import Home from './pages/Home';
import Canchas from "./pages/Canchas";
import Reservas from "./pages/Reservas" 

//Style
import './styles/App.css';

//routes react
import { Routes, Route} from 'react-router-dom'


function App() {

  //Todo esto podría ir a la store global:
  const [canchas, setCanchas] = useState([]);
  const [reservas, setReservas] = useState([]);

  const [actCanchas, setActCanchas] = useState(false);
  const [actReservas, setActReservas] = useState(false);

  /* Loaders */
  const [activedLoader, setActivedLoader] = useState(false);
  const [reservasLoader, setReservasLoader] = useState(false);
 

  const URL_BASE = `http://localhost:80/api/`;

  useEffect(() =>{
    const requestOptions={
      method: 'GET'
      } ;
   fetch(`${URL_BASE}canchas`, requestOptions)
      .then(response => response.json())
      .then(data =>  setCanchas(data.detail))
      .then(response => setActivedLoader((prevValue) => !prevValue)); //siempre aca da false
      /* Desactivar spinner */
    }, [actCanchas]);

    //Con las reservas
    useEffect(() =>{
      const requestOptions={
        method: 'GET'
      };
      fetch(`${URL_BASE}reservas`, requestOptions)
        .then(setReservasLoader(true))
        .then(response => response.json())
        .then(data => setReservas(data.detail))
        .then(response => setReservasLoader((v) => false))
        /* Desactivar Spinner */
    }, [actReservas])
 
  return (
    <>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/inicio' element={<Home canchas={canchas} reservas={reservas} reservasLoader={reservasLoader}/>}></Route>
            <Route path='/canchas' element={<Canchas canchas={canchas} setActCanchas={setActCanchas} activedLoader={activedLoader} setActivedLoader={setActivedLoader}/>}></Route>
            <Route path='/reservas' element={<Reservas canchas={canchas} reservas={reservas} setActReservas={setActReservas}   setReservasLoader={setReservasLoader} /> }></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
