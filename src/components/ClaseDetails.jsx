import React, {useState, useEffect} from 'react'
import moment from 'moment'

import '../styles/claseDetail.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faPenToSquare} from '@fortawesome/free-solid-svg-icons'
//components
import SelectAlumnosAddClase from './SelectAlumnosAddClase'


const ClaseDetails = ({reserva, diaReserva, setClaseDetail, alumnosDeLaClase, setAlumnosDeLaClase, alumnos}) => {
    
    const dias = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ];

      const [selectActive, setActiveSelect] = useState(false);

      const handleDeleteAlumno = (indexItem) =>{
        setAlumnosDeLaClase((prevState) =>
        prevState.filter((alu, index) => index !== indexItem))
        //aca vamos a deletear al alumno de la clase
      }
    
      const formateoFecha = (fecha)=>{
        const numeroDia = new Date(fecha).getDay();
        const nombreDia = dias[numeroDia];
    
        const destructFecha = fecha.split('-');
        return `${nombreDia} ${destructFecha[2]}/${destructFecha[1]}`
      }

      const clasePasada = (fecha)=>{
        return (fecha.split('-').join('') <  moment(new Date()).format("YYYYMMDD"))
      }

      const actualizarClase = () =>{
        //Aca agarrar todos los datos que tiene detalles y hacer un POST a la API, el unico problema es que los IDs de los usuarios no vienen a la front
      }
  
  return (
    <>
    {reserva.canchaNombre !== undefined ?
    <div id='clase-detail-component'>
        <button id='clase-closeBTN' onClick={() => setClaseDetail({})}>x</button>
        <div id='clase-detail-general'  className='clase-caja' >
          <h2>{reserva.canchaNombre}</h2>
          <p id='clase-detail-fecha'>{formateoFecha(reserva.fecha)}</p>
          <p >{reserva.horaIni} - {reserva.horaFin}</p>
        </div>

        <div id='clase-detail-profesor' className='clase-caja'>
            <h3>Profesor</h3>
            
            <p className='clase-detail-nombre'>{reserva.titular.nombre}</p>
            {clasePasada(reserva.fecha) ? 
            ""
            : 
            <button id='clase-detail-profesor-edit'><FontAwesomeIcon icon={faPenToSquare} /></button>
            }
        </div>

        <div id='clase-detail-alumnos'  className='clase-caja'>
            <h3>Alumnos</h3>
            <div id='alumnosList'>
             {alumnosDeLaClase.map((el, index) => <div key={index} className='clase-detail-nombre' id='alumnosList-detail'><p>{el.nombre}</p>  {clasePasada(reserva.fecha) ? "": <button id='deleteAlumnoBtn' onClick={() => handleDeleteAlumno(index)}>x</button>}  </div>)}
            </div>
            {clasePasada(reserva.fecha) ?
              ""
            :
              <div id='clase-detail-alumnos-nuevosAlumnos'>
{/*                 <SelectAlumnosAddClase alumnosDeLaClase={alumnosDeLaClase} alumnos={alumnos} setAlumnos={setAlumnosDeLaClase}/>
 */}                <button id='clase-detail-alumnos-addBTN'><FontAwesomeIcon icon={faPlusCircle} /></button>
              </div>
            }        
        </div>
        {clasePasada(reserva.fecha) ?
        
        ""
        :
          <div id='clase-detail-btns'>
            <button id='clase-detail-guardar' onClick={() => actualizarClase}>Guardar</button>
            <button id='clase-detail-cancelar' onClick={() => setClaseDetail({})}>Cancelar</button>
          </div>
        }
    </div>
    
    : ""}   
    {console.log(reserva)}
    </>
    
  )
}

export default ClaseDetails