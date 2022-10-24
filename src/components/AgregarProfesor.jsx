import React from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
//Components
import FeedbackText from './FeedbackText'
const AgregarProfesor = ({active, setActive, setProfesores, profesores}) => {
  
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleChangeName = (e) =>{
        setNombre(e.target.value);
    }

    const handleChangePhone = (e) =>{
        setTelefono(e.target.value)
    }

    const submitProfesorForm = ()=>{
        const nuevoProfesor = {id: Math.random(99999), nombre: nombre, telefono: telefono };
        setProfesores((prevValue) =>[...prevValue, nuevoProfesor]);
        setActive(false);
    }

    const handleCloseForm = () =>{
        setActive(false);
      }

    return (
        <>
            {active &&
                <div id='profesor-add-component'>
                <button id='close-profesor-add-form' onClick={ handleCloseForm}>x</button>
                <h2>Nuevo Profesor</h2>     
                <form action="" id='alumno-add-form' onSubmit={submitProfesorForm} >
                    <input type="text" name="" className='profesor-add-form-input' id="" placeholder='Nombre' value={nombre}  onChange={handleChangeName}/>
                    <input type="text" name="" id="" placeholder='Telefono' className='profesor-add-form-input' value={telefono} onChange={handleChangePhone} />
                    <button id='profesor-add-form-addBtn' type='sumbit'  ><FontAwesomeIcon id='canchas-add-form-btn' icon={faPlusCircle}/></button>                
                </form>
            </div>
            }
        </>
  )
}

export default AgregarProfesor