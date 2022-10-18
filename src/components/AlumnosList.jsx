import React, {useState} from 'react'
//components
import Alumno from './Alumno'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const AlumnosList = () => {

    const[alumnos, setAlumnos] = useState([]);
  return (
    <div id='alumnos-list-component'>

        <div id='alumnos-list-options'>
            <p>Nombre <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            <p>Telefono</p>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" name="" id="" />
            </div>
        </div>

        {alumnos.map((a) => <Alumno key={a.id} properties={a}></Alumno>)}
    </div>
  )
}

export default AlumnosList