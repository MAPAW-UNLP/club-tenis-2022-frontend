import React from 'react'
import { useState } from 'react';

//Components
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';


//FontawesomeIcon
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ClaseFormComponent = ({active, canchas,setCancha,setActive, handleAddReserva, setProfesor, setAlumnos}) => {



    const handleChangeSelect = (e) =>{
        setCancha(e.target.value);
        const nextInput = document.getElementById('profesorInput');
        e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
      }

      const handleChangeProfesor = (e) =>{
        setProfesor(e.target.value);
        const nextInput = document.getElementById('alumnosInput');
        e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
      }

    const handleChangeAlumnos = (e) =>{
        setAlumnos(e.target.value);
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
            
            <InputComponent type={'text'} id={'profesorInput'} className={'inputReserva'} placeholder={'Profesor'} onChangeFuncion={handleChangeProfesor} deshabilitado={true} />
            <InputComponent type={'text'} id={'alumnosInput'} className={'inputReserva'} placeholder={'Alumnos'} onChangeFuncion={handleChangeAlumnos} deshabilitado={true}/>
            <button id='submit-btn' onClick={handleAddReserva}> <FontAwesomeIcon id='next-icon' icon={faPlusCircle} /> </button>   
        </div>
    }
    </>
  )
}

export default ClaseFormComponent