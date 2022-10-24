import React, {useState, useEffect} from 'react'
//components
import Profesor from './Profesor'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ProfesoresList = ({profesores}) => {

  const [ profesoresFiltrador, setProfesoresFiltrados] = useState(profesores);


  const handleChangeSearchProfessor = (e) =>{
    const Posibles = (profesores.filter((a) => a.nombre.toUpperCase().includes(e.target.value.toUpperCase())) );
    if(e.target.value === ''){
        setProfesoresFiltrados(profesores);
    }
    else{
        setProfesoresFiltrados(Posibles)
    }
  }

  useEffect(() =>{
    setProfesoresFiltrados(profesores);
  }, [profesores])
  return (
    <div id='profesores-list-component'>
        <div id='profesores-list-options'>
            <p>Nombre <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            <p>Telefono</p>
            <div id='profesores-searchbar'>
                <FontAwesomeIcon id='magnify-icon' icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" name="" id="" placeholder='Busca un alumno' onChange={handleChangeSearchProfessor} />
            </div>
        </div>
        {profesoresFiltrador.map((p) => <Profesor key={p.id} info={p} ></Profesor>)}
    </div>
  )
}

export default ProfesoresList