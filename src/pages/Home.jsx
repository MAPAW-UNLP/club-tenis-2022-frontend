import React, {useState} from 'react'
//react router
import {useNavigate} from 'react-router-dom'

import NavBar from './NavBar'
import Reserva from '../components/Reserva'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import '../styles/home.css'






const Home = ({canchas, reservas}) => {


  //Todo esto es para manejar una fecha visible para el usuario
  const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]
  const diasSemana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ];
  const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  //cositas para formatear el dia
  const mes = ("0" + (new Date().getMonth() + 1)).slice(-2)
  const dia = ("0" + new Date().getDate()).slice(-2)
  const año = (new Date().getFullYear());
  const DIA_EN_MILISEGUNDOS = 24*60*60*1000; //esto para devolver el ayer y el mañana

  const DateToday = `${año}-${mes}-${dia}`
  const dateMuestra = `${dia}-${mes}`;

  const [today, setToday] = useState(DateToday);
  const [diaVisible,  setDiaVisible] = useState(dateMuestra);
  const [mesVisible, setMesVisible] = useState(meses[new Date().getMonth()]);
  
  
  const handleChangeDate = (e) =>{
    setToday(e.target.value);
    
    const fecha = (e.target.value).split("-");
    setDiaVisible(`${fecha[2]}-${fecha[1]}`);
    setMesVisible(`${meses[fecha[1]-1]}`);
  }
  
  
  const navigate = useNavigate();
 
  
  return (

    /* Hacer un useEffect que setee en un estado los proximos eventos de las canchas y hacer un map sobre estis */
    <div id="home-component">
        <NavBar title={"Tennis app"} />
        <div id='table-component'>
          <div id='table-options'>
            <button id='addReservaBtn' onClick={() => navigate('../reservas')}><FontAwesomeIcon icon={faPlusCircle} ></FontAwesomeIcon></button>
            <h2 id='diaDeHoy'>{diasSemana[new Date().getDay()]} / {diaVisible} / {mesVisible}  </h2>               
            <input type="date" name="" id="" className='table-options-inputFecha' onChange={handleChangeDate} />
          </div>
          <div id='table-grid' style={{display:'grid', gridTemplateColumns: `repeat(${canchas.length+1}, 1fr)`, gridTemplateRows: `repeat(${horas.length+1}, 1fr)` }}>
            <div id='hora' style={{gridArea: "1/1/2/2"}}>Hora</div>
            {horas.map((el, i) => <div className='horas' key={el} style={{gridArea:`${i+2}/1/${i+3}/2`}}> {el} </div>)}  
            {canchas.map((el, i) => <div className='canchas' key={el.nombre} style={{gridArea: `1/${i+2} / 2/${i+3}`}} > {el.nombre} </div>)}
          
            {reservas.map((reserva) => {
              let data;
              if (reserva.titular){
                 data = {
                  dia: reserva.fecha,
                  horaInicio: reserva.horaIni,
                  horaFin: reserva.horaFin,
                  cancha: reserva.canchaNombre,
                  nombre: `${reserva.titular.nombre} ${reserva.titular.apellido}`,
                  tipo: reserva.tipo,
                  telefono: reserva.titular.telefono,
                };
              } else {
                 data = {...reserva}
              }
                
            return <Reserva key={reserva.reservaId} datos={data} canchas={canchas} today={today} />
          })}
          </div>
        </div>

    </div>
  )
}

export default Home