import { useEffect } from 'react'
import { useState } from 'react';
//Components
import Login from './pages/Login'
import Home from './pages/Home';
import Canchas from "./pages/Canchas";
import Reservas from "./pages/Reservas" 
import Alumnos from './pages/Alumnos'
import Profesores from './pages/Profesores'
//VarianteHome
import HomeV from './pages/HomeVariant'

//Style
import './styles/App.css';

//routes react
import { Routes, Route} from 'react-router-dom'


function App() {

  //Todo esto podría ir a la store global:
  const [canchas, setCanchas] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [profesores, setProfesores] = useState([]);

  const [actCanchas, setActCanchas] = useState(false);
  const [actReservas, setActReservas] = useState(false);
  const [actAlumnos, setActAlumnos] = useState(false);
  const [actProfesores, setActProfesores] = useState(false);

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

      //alumnos
      useEffect(() =>{
        const requestOptions={
          method: 'GET'
        };
        fetch(`${URL_BASE}alumnos`, requestOptions)
        .then(response => response.json())
        .then(data =>  setAlumnos(data.detail))
          /* Desactivar Spinner */
      }, [actAlumnos])

      //profesores
      useEffect(() =>{
      const requestOptions={
        method: 'GET'
      };
      fetch(`${URL_BASE}profesores`, requestOptions)
      .then(response => response.json())
      .then(data =>  setProfesores(data))
        /* Desactivar Spinner */
    }, [actProfesores])
 
  return (
    <>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/inicio' element={<Home />}></Route>
            <Route path='/reservas' element={<HomeV canchas={canchas} reservas={reservas} reservasLoader={reservasLoader}/>}></Route>
            <Route path='/canchas' element={<Canchas canchas={canchas} setActCanchas={setActCanchas} activedLoader={activedLoader} setActivedLoader={setActivedLoader}/>}></Route>
            <Route path='/alumnos' element={<Alumnos alumnos={alumnos} setAlumnos={setAlumnos} /> }></Route>
            <Route path='/profesores' element={<Profesores profesores={profesores} setProfesores={setProfesores} /> }></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
