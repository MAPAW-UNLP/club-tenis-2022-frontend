import React, {useState, useEffect} from 'react'
//components
import Alumno from './Alumno'

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const AlumnosList = ({alumnos}) => {

    const [alumnosFiltrados, setAlumnosFiltrados] = useState(alumnos)

  const handleChangeSearchAlumnno = (e) =>{

    const Posibles = (alumnos.filter((a) => a.nombre.toUpperCase().includes(e.target.value.toUpperCase())) );
    if(e.target.value === ''){
      setAlumnosFiltrados(alumnos);
    }
    else{
      setAlumnosFiltrados(Posibles)
    }

  }

  useEffect(() =>{
    setAlumnosFiltrados(alumnos);
  }, [alumnos])

  return (
    <div id='alumnos-list-component'>

        <div id='alumnos-list-options'>
            <p>Nombre <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            <p>Telefono</p>
            <p>Saldo</p>
            <div id='alumnos-searchbar'>
                <FontAwesomeIcon id='magnify-icon' icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" name="" id="" placeholder='Busca un alumno' onChange={handleChangeSearchAlumnno} />
            </div>
        </div>

        {alumnosFiltrados.map((a) => <Alumno key={a.id} info={a}></Alumno>)}
    </div>
  )
}

export default AlumnosList