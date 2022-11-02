import React from 'react'
import { useState } from 'react';

//Components
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';


//FontawesomeIcon
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ClaseFormComponent = ({active, canchas,setCancha,setActive, handleAddReserva, setNombre, setTelefono, profesores, setProfesores, alumnos, setAlumnos, setGrupoIds, setProfesorSel}) => {

  const [tipoClaseSel, setTipoClaseSel] = useState('');


    const handleChangeSelect = (e) =>{
        setCancha(e.target.value);
      }

      const handleChangeProfesorSelect = (e) => {
        console.log('Selecciono profesor ', e.target.value)
        setProfesorSel(e.target.value);
      }
      
      const handleChangeAlumnoSelect = (e) => {
        console.log('Selecciono alumno ', e.target.value)
        setGrupoIds(e.target.value)
      }

      const handleChangeTipoClaseSelect = (e) => {
        console.log('Selecciono tipo de clase ', e.target.value)
         setTipoClaseSel(e.target.value)
      }
    
  return (
    <>
    {active &&
      
        <div id='claseFormComponent'>
            <hr />
            <select name="" className='inputReserva' id="" onChange={handleChangeSelect} >
              <option value="">Cancha</option>
              {canchas.map((el) => <option value={el.id} key={el.id}>{el.nombre}</option>)}
            </select>
            <select name="" className='inputReserva' id="" onChange={handleChangeProfesorSelect} >
              <option value="">Profesor</option>
              {profesores.map((el) => <option value={el.id} key={el.id}>{el.nombre}</option>)}
            </select>
            <select name="" className='inputReserva' id="" onChange={handleChangeTipoClaseSelect} >
              <option value="">Tipo de Clase</option>
              <option value="g">Grupal</option>
              <option value="i">Individual</option>
            </select>


            { tipoClaseSel == 'i' && 
            <select name="" className='inputReserva' id="" onChange={handleChangeAlumnoSelect} >
              <option value="">Alumno</option>
              {alumnos.map((el) => <option value={el.id} key={el.id}>{el.nombre}</option>)}
            </select>
            }
            <button id='submit-btn' type="submit" onClick={handleAddReserva}> <FontAwesomeIcon id='next-icon' icon={faPlusCircle} /> </button>   
        </div>
    }
    </>
  )
}

export default ClaseFormComponent