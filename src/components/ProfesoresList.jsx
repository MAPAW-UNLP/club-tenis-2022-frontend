import React, {useState, useEffect} from 'react'
//components
import Profesor from './Profesor'
import InputComponent from './InputComponent'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ProfesoresList = ({profesores}) => {

  const [ profesoresFiltrados, setProfesoresFiltrados] = useState(profesores);


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
                <InputComponent type={'text'} placeholder={'Busca un profesor'} onChangeFuncion={handleChangeSearchProfessor}/>
            </div>
        </div>
        {profesoresFiltrados.map((p) => <Profesor key={p.id} info={p} ></Profesor>)}
    </div>
  )
}

export default ProfesoresList