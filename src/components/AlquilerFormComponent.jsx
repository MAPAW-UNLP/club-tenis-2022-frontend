import React from 'react'
import { useState } from 'react';

//FontawesomeIcon
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AlquilerFormComponent = ({active, canchas,setCancha,setActive, handleAddReserva, setNombre, setTelefono}) => {



    const handleChangeSelect = (e) =>{
        setCancha(e.target.value);
        const nextInput = document.getElementById('nameInput');
        e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
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
        <div id='alquilerFormComponent'>
            <hr />
            <select name="" id="" className='inputReserva' onChange={handleChangeSelect}>
                <option value="">Nada</option>
                {canchas.map((cancha) => <option value={cancha.nombre}>{cancha.nombre}</option>)}
            </select>

            <input type="text" name="" className='inputReserva' id="nameInput" placeholder='Nombre' disabled onChange={handleChangeName}/>
            <input type="number" name="" className='inputReserva' id="telefonoInput" placeholder='Telefono' disabled onChange={handleChangePhone}/>
            <button id='submit-btn' onClick={handleAddReserva}> <FontAwesomeIcon id='next-icon' icon={faPlusCircle} /> </button>   
        </div>
    }
    </>
  )
}

export default AlquilerFormComponent