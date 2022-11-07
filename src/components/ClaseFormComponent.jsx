import React from 'react'
import { useState } from 'react';

//Components
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import Select from 'react-select';


//FontawesomeIcon
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ClaseFormComponent = ({active, canchas,setCancha,setActive, handleAddReserva, setNombre, setTelefono, profesores, setProfesores, alumnos, setAlumnos, grupoIds, setGrupoIds, setProfesorSel}) => {

  const [tipoClaseSel, setTipoClaseSel] = useState('');

  const handleChangeSelect = (e) =>{
      setCancha(e.target.value);
      const nextInput = document.getElementById('profeInput');
      e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;
  }

  const handleChangeProfesorSelect = (e) => {
    console.log('Selecciono profesor ', e.target.value)
    setProfesorSel(e.target.value);
    const nextInput = document.getElementById('typeReserva');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;
  }
      
  const handleChangeAlumnoSelect = (e) => {
    console.log('Selecciono alumno ', e.target.value);
    setGrupoIds(e.target.value);
    const nextInput = document.getElementById('submit-btn');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;
  }

  const handleChangeAlumnoMultSelect = (e) => {
    console.log('Selecciono alumno ', e);
    setGrupoIds(e.map((i)=>i.value));
    console.log(grupoIds);
    const nextInput = document.getElementById('submit-btn');
    e.value === [] ? nextInput.disabled = true: nextInput.disabled = false;
  }

  const handleChangeTipoClaseSelect = (e) => {
    console.log('Selecciono tipo de clase ', e.target.value)
    setTipoClaseSel(e.target.value)
  }

  const handleChangeName = (e) =>{
    setNombre(e.target.value);
    const nextInput = document.getElementById('telefonoInput');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
  }

  const handleChangePhone = (e) =>{
    setTelefono(e.target.value);
    const nextBtn = document.getElementById('submit-btn');
    e.target.value === "" ? nextBtn.disabled = true: nextBtn.disabled = false;  
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
            <select name="" className='inputReserva' id='profeInput' onChange={handleChangeProfesorSelect} disabled>
              <option value="">Profesor</option>
              {profesores.map((el) => <option value={el.id} key={el.id}>{el.nombre}</option>)}
            </select>
            <select name="" className='inputReserva' id="typeReserva" onChange={handleChangeTipoClaseSelect} disabled>
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
            { tipoClaseSel == 'g' &&
            <Select className='inputReserva' isMulti onChange={handleChangeAlumnoMultSelect} options={alumnos.map((el)=> ({label:el.nombre, value:el.id}))} placeholder="Seleccionar alumnos">
            </Select>
            }
            <button id='submit-btn' onClick={handleAddReserva} disabled> <FontAwesomeIcon id='next-icon' icon={faPlusCircle} /> </button>   
        </div>
    }
    </>
  )
}

export default ClaseFormComponent