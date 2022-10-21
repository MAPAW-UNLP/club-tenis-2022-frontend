import React, {useState, useEffect} from 'react'
//components
import Profesor from './Profesores'

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const ProfesoresList = ({profesores}) => {

  const [profesoresFiltrados, setProfesoresFiltrados] = useState(profesores)

  useEffect(() =>{
    setProfesoresFiltrados(profesores);
  }, [profesores])

  return (
    <div id='alumnos-list-component'>

        <div id='alumnos-list-options'>
            <p>Profesor <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            <p>Telefono</p>
      
        </div>

        {profesoresFiltrados.map((a) => <Profesor key={a.id} info={a}></Profesor>)}
    </div>
  )
}

export default ProfesoresList