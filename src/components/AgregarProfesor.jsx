import React from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const AgregarProfesor = ({active, setActive, setProfesor}) => {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleChangeName = (e) =>{
        setNombre(e.target.value);
    }

    const handleChangePhone = (e) =>{
        setTelefono(e.target.value)

    }

    const submitProfesorForm = () =>{
        const nuevoProfesor = {id: Math.random(89999), nombre: nombre, telefono: telefono};
        setProfesor((prevValue)=>[...prevValue, nuevoProfesor])
        setActive(false)
        /* Hacer el post aca y agrtegar el active loader */

    }

    const handleCloseForm = () =>{
        setActive(false);
      }
  return (
    <>
        {active &&
            <div>
                <button id='' onClick={ handleCloseForm}>x</button>
                <h2>Nuevo Profesor</h2>     
                <form action="" id='' onSubmit={submitProfesorForm} >
                    <input type="text" name="" id="" placeholder='Nombre' value={nombre} className='' onChange={handleChangeName}/>
                    <input type="text" name="" id="" placeholder='Telefono' className='' value={telefono} onChange={handleChangePhone} />
                    <button id='' type='sumbit' ><FontAwesomeIcon id='' icon={faPlusCircle}/></button>                
                </form>
            </div>
        }
    </>
  )
}

export default AgregarProfesor