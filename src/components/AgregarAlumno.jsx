import React from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const AgregarAlumno = ({active, setActive, setAlumnos}) => {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nacimiento, setNacimiento] = useState('');

    const handleChangeName = (e) =>{
        setNombre(e.target.value);
    }

    const handleChangePhone = (e) =>{
        setTelefono(e.target.value)

    }

    const handlePickBirth = (e) =>{
        setNacimiento(e.target.value);
    }

    const submitAlumnoForm = () =>{
        const nuevoAlumno = {id: Math.random(89999), nombre: nombre, telefono: telefono,  saldo: 0, nacimiento: nacimiento};
        setAlumnos((prevValue)=>[...prevValue, nuevoAlumno])
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
                <h2>Nuevo Alumno</h2>     
                <form action="" id='' onSubmit={submitAlumnoForm} >
                    <input type="text" name="" id="" placeholder='Nombre' value={nombre} className='' onChange={handleChangeName}/>
                    <input type="text" name="" id="" placeholder='Telefono' className='' value={telefono} onChange={handleChangePhone} />
                    <input type="date" name="" id="" value={nacimiento} onChange={setNacimiento} />
                    <button id='' type='sumbit' ><FontAwesomeIcon id='' icon={faPlusCircle}/></button>                
                </form>
            </div>
        }
    </>
  )
}

export default AgregarAlumno