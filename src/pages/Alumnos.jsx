import React, {useState, useEffect} from 'react'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//components
import NavBar from './NavBar'
import AgregarAlumno from '../components/AgregarAlumno'
import AlumnosList from '../components/AlumnosList'
//Alumnos provisorio
import Alumnos from '../DevelopmentData/Alumnos'
//Styles 
import '../styles/alumnos.css'

const Users = () => {

  
  
  const [alumnos, setAlumnos] = useState([]);

  const [actAlumnos, setActAlumnos] = useState(false);

  const [active, setActive] = useState(false);

  const URL_BASE = `http://localhost/api/`;

  useEffect(() =>{
    const requestOptions={
      method: 'GET'
      } ;
   fetch(`${URL_BASE}personas`, requestOptions)
      .then(response => response.json())
      .then(data =>  setAlumnos(data))
  
      /* Desactivar spinner */
    }, [actAlumnos]);

  return (
    <div id='alumnos-component'>
      <NavBar title={'Alumnos'}></NavBar> 
      <div id='alumnos-component-mainContent'>
        <button id='canchas-add-btn' onClick={() => {setActive((active)=> true)}}> <FontAwesomeIcon icon={faPlusCircle}/></button>
        <AgregarAlumno active={active} setActive={setActive} setAlumnos={setAlumnos} alumnos={alumnos} setActAlumnos={setActAlumnos}/>
        { alumnos.length === 0 ?
          <div>...cargando</div>          
          :
          <AlumnosList alumnos={alumnos}/>
        }
        

      </div>
    </div>
  ) 
}

export default Users