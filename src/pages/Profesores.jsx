import React, {useState, useEffect} from 'react'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//components
import NavBar from './NavBar'
import ProfesoresList from '../components/ProfesoresList'
import AgregarProfesor from '../components/AgregarProfesor'

//Styles 
import '../styles/alumnos.css'

const Profesores = ({profesores, setProfesores}) => {

  const [active, setActive] = useState(false);


  return (
    <div id='alumnos-component'>
      <NavBar title={'Profesores'}></NavBar> 
      <div id='alumnos-component-mainContent'>
        <button id='canchas-add-btn' onClick={() => {setActive((active)=> true)}}> <FontAwesomeIcon icon={faPlusCircle}/></button>
        <AgregarProfesor active={active} setActive={setActive} setProfesores={setProfesores} />
        <ProfesoresList profesores={profesores}/>

      </div>
    </div>
  ) 
}

export default Profesores