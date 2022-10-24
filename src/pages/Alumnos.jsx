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


  
  const [alumnos, setAlumnos] = useState(Alumnos);

  const [active, setActive] = useState(false);


  return (
    <div id='alumnos-component'>
      <NavBar title={'Alumnos'}></NavBar> 
      <div id='alumnos-component-mainContent'>
        <button id='canchas-add-btn' onClick={() => {setActive((active)=> true)}}> <FontAwesomeIcon icon={faPlusCircle}/></button>
        <AgregarAlumno active={active} setActive={setActive} setAlumnos={setAlumnos} />
        <AlumnosList alumnos={alumnos}/>

      </div>
    </div>
  ) 
}

export default Users