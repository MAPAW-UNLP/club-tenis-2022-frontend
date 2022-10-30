import { useEffect } from 'react'
import { useState } from 'react';
//Components
import Login from './pages/Login'
import Home from './pages/Home';
import Canchas from "./pages/Canchas";
import Reservas from "./pages/Reservas" 
import Alumnos from './pages/Alumnos'
import Profesores from './pages/Profesores';
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

  const [actCanchas, setActCanchas] = useState(false);
  const [actReservas, setActReservas] = useState(false);

  /* Loaders */
  const [activedLoader, setActivedLoader] = useState(false);
  const [reservasLoader, setReservasLoader] = useState(false);
  const [alumnosLoader, setAlumnosLoader] = useState(false);
  const [profesoresLoader, setProfesoresLoader] = useState(false);

  //para actualizar los alumnos
  const [alumnos, setAlumnos] = useState([])
  const [actAlumnos, setActAlumnos] = useState(false);
 

  //para actualizar los profesores
  const [profesores, setProfesores] = useState([]);
  const [actProfesores, setActProfesores] = useState(false);

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
 

    //get de los alumnos
    useEffect(() =>{
      const requestOptions={
        method: 'GET'
        } ;
     fetch(`${URL_BASE}alumnos`, requestOptions)
        .then(response => response.json())
        .then(data =>  setAlumnos(data.detail))
        .then(response => setAlumnosLoader((v) => false))
    
        /* Desactivar spinner */
      }, [actAlumnos]);

    //get Profewsores
    useEffect(() =>{
      const requestOptions={
        method: 'GET'
        } ;
     fetch(`${URL_BASE}profesores`, requestOptions)
        .then(response => response.json())
        .then(data =>  setProfesores(data))
        .then(response => setProfesoresLoader((v) => false))
    
        /* Desactivar spinner */
      }, [actProfesores]);
  return (

    <>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/inicio' element={<Home />}></Route>
            <Route path='/reservas' element={<HomeV canchas={canchas} reservas={reservas} profesores={profesores} reservasLoader={reservasLoader}/>}></Route>
            <Route path='/canchas' element={<Canchas canchas={canchas} setActCanchas={setActCanchas} activedLoader={activedLoader} setActivedLoader={setActivedLoader}/>}></Route>
            <Route path='/alumnos' element={<Alumnos actAlumnos={actAlumnos} setActAlumnos={setActAlumnos} alumnos={alumnos} setAlumnos={setAlumnos}  setAlumnosLoader={setAlumnosLoader} alumnosLoader={alumnosLoader}/>}></Route>
            <Route path='/profesores' element={<Profesores actProfesores={actProfesores} setActProfesores={setActProfesores} profesores={profesores} setProfesores={setProfesores} setProfesoresLoader={setProfesoresLoader} profesoresLoader={profesoresLoader}/> }></Route>
            //ruta oculta
            <Route path='/nuevaReserva' element={<Reservas canchas={canchas} reservas={reservas} setActReservas={setActReservas} setReservasLoader={setReservasLoader} profesores={profesores} setProfesores={setProfesores} alumnos={alumnos} />}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
