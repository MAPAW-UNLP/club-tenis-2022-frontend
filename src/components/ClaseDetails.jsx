import React, {useState, useEffect} from 'react'

import '../styles/claseDetail.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faPenToSquare} from '@fortawesome/free-solid-svg-icons'
//components
import SelectAlumnosAddClase from './SelectAlumnosAddClase'


const ClaseDetails = ({reserva, diaReserva, setClaseDetail, alumnosDeLaClase, setAlumnosDeLaClase, alumnos}) => {
    
    const dias = [
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sabado',
        'domingo',
      ];

      const [selectActive, setActiveSelect] = useState(false);

      const handleDeleteAlumno =() =>{
        //aca vamos a deletear al alumno de la clase
      }
    
      const formateoFecha = (fecha)=>{
        const numeroDia = new Date(fecha).getDay();
        const nombreDia = dias[numeroDia];
    
        const destructFecha = fecha.split('-');
        return `${nombreDia} ${destructFecha[2]}/${destructFecha[1]}`
      }
  
  return (
    <>
    {reserva.canchaNombre !== undefined ?
    <div id='clase-detail-component'>
        <button id='clase-closeBTN' onClick={() => setClaseDetail({})}>x</button>
        <h2>Detalles</h2>
      
        <h4 id='clase-detail-fecha'>{formateoFecha(reserva.fecha)}</h4>
        <div id='clase-detail-general'  className='clase-caja' >
            <h3>General</h3>
            <p className='clase-detail-nombre'>{reserva.canchaNombre}</p>
            <p className='clase-detail-numeros'>{reserva.horaIni} - {reserva.horaFin}</p>
        </div>

        <div id='clase-detail-profesor' className='clase-caja'>
            <h3>Profesor</h3>
            <p className='clase-detail-nombre'>{reserva.titular.nombre}</p>
            <button id='clase-detail-profesor-edit'><FontAwesomeIcon icon={faPenToSquare} /></button>
        </div>

        <div id='clase-detail-alumnos'  className='clase-caja'>
            <h3>Alumnos</h3>
            <div id='alumnosList'>
             {alumnosDeLaClase.map((el) => <div key={el.nombre} className='clase-detail-nombre' id='alumnosList-detail'><p>{el.nombre}</p> <button onClick={handleDeleteAlumno}>x</button></div>)}
            </div>
            <SelectAlumnosAddClase alumnosDeLaClase={alumnosDeLaClase} alumnos={alumnos} setAlumnos={setAlumnosDeLaClase}/>

            <button id='clase-detail-alumnos-addBTN'><FontAwesomeIcon icon={faPlusCircle} /></button>
        </div>
        <button id='clase-detail-guardar'>Guardar</button>
        <button id='clase-detail-cancelar'>Cancelar</button>
    </div>
    
    : ""}   
    {console.log(reserva)}
    </>
    
  )
}

export default ClaseDetails