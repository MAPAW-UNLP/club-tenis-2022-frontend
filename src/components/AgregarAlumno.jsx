import React from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
//Components
import FeedbackText from './FeedbackText'


const AgregarAlumno = ({active, setActive, setAlumnos, alumnos}) => {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nacimiento, setNacimiento] = useState('');

    //feedbackComponent
    const [feedBack, setFeedBack] = useState({'text': '', 'color':'', 'backGroundColor':'',  'active':false});


    const handleChangeName = (e) =>{
        setNombre(e.target.value);
        if(alumnos.map((each) => each.nombre.toUpperCase()).indexOf(e.target.value.toUpperCase()) === -1){

        }
        else{
            setFeedBack({...feedBack, 'text': 'El nombre del alumno ya existe','color': '#F4F4F4','backGroundColor': '#CC3636', 'active': true})
        }
        
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
            <div id='alumno-add-component'>
                <button id='close-alumno-add-form' onClick={ handleCloseForm}>x</button>
                <h2>Nuevo Alumno</h2>     
                <form action="" id='alumno-add-form' onSubmit={submitAlumnoForm} >
                    <input type="text" name="" className='alumno-add-form-input' id="" placeholder='Nombre' value={nombre}  onChange={handleChangeName}/>
                    <input type="text" name="" id="" placeholder='Telefono' className='alumno-add-form-input' value={telefono} onChange={handleChangePhone} />
                    <input type="date" name="" id="" className='alumno-add-form-input'  value={nacimiento} onChange={handlePickBirth} />
                    <button id='alumno-add-form-addBtn' type='sumbit'  ><FontAwesomeIcon id='canchas-add-form-btn' icon={faPlusCircle}/></button>                
                </form>
            </div>
        }
    </>
  )
}

export default AgregarAlumno