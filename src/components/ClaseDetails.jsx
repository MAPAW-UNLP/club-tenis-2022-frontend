import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

import '../styles/claseDetail.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faPenToSquare} from '@fortawesome/free-solid-svg-icons'
//components
import SelectAlumnosAddClase from './SelectAlumnosAddClase'
import FeedbackText from './FeedbackText'
import LoaderSpinner from './LoaderSpinner'


const ClaseDetails = ({reserva, diaReserva, setClaseDetail, alumnosDeLaClase, setAlumnosDeLaClase, alumnos, profesores}) => {
    
      
  
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
      const [actProfe, setActProfe] = useState('');
      const [idReserva, setIdReserva] = useState('');

      const [profeLoader, setProfeLoader] = useState(false);
      const navigate = useNavigate();

      const handleDeleteAlumno = (indexItem) =>{
        setAlumnosDeLaClase((prevState) =>
        prevState.filter((alu, index) => index !== indexItem))
        //aca vamos a deletear al alumno de la clase
      }

      const handleEditProfe = (e) =>{
        console.log(e.target.value);
        setActProfe(parseInt(e.target.value));
        console.log(actProfe);
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

      const editProfe = () =>{
        //setIdReserva(reserva.reservaId);
        
        setProfeLoader(true);
        //console.log(typeof idReserva, typeof actProfe);
        const URL_BASE="http://localhost:80/api/";
        const params = new URLSearchParams();
        params.append('reserva_id', reserva.reservaId);
        params.append('persona_id', actProfe);
        

        const requestOptions = {
            method: 'PUT',
            body: params
        } ;
        fetch(`${URL_BASE}profe_reserva`, requestOptions)
          .then(response => setActProfe((v) => !v))
          .then(setProfeLoader(true))
          .finally(navigate('../reservas'));
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

            <select name="" className='inputReserva' id='profeInput' onChange={handleEditProfe}>
              <option value="">Cambiar Profe</option>
              {profesores.map((el) => { return reserva.titular.nombre !== el.nombre ? <option value={el.id} key={el.id}>{el.nombre}</option>
              : ""})}
            </select>
            {clasePasada(reserva.fecha) ? 
            ""
            : 
            <button id='clase-detail-profesor-edit' onClick={editProfe}><FontAwesomeIcon icon={faPenToSquare} /></button>
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