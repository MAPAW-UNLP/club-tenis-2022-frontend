import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
//styles
import '../styles/reservas.css'

//hora
import SelectHoraInicio from '../components/SelectHoraInicio'
import SelectHoraFin from '../components/SelectHoraFin'
//components
import NavBar from './NavBar'
import AlquilerFormComponent from '../components/AlquilerFormComponent'
import InputComponent from '../components/InputComponent'
import SelectComponent from '../components/SelectComponent'

//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



const URL_BASE = `http://localhost:80/api/`;



const Reservas = ({canchas, reservas, setReservas}) => {

  //navegacion
  const navigate = useNavigate();
  const [alquilerOp, setAlquilerOp] = useState(false);
  //a futuro vamos a tener un tipo reserva por aca.
  const [reservaTipo, setReservaTipo] = useState("");
  const [cancha, setCancha] = useState("");
  //con estos campos verificar actualizar el select de cancha solo mostrando las posibles
  const [dia, setDia] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  
  const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]
  

  //alquiler
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  //diaFormateadopara HTML
  const mes = ("0" + (new Date().getMonth() + 1)).slice(-2)
  const day = ("0" + new Date().getDate()).slice(-2)
  const año = (new Date().getFullYear());

  const today = `${año}-${mes}-${day}` 

  const handleTypeChange = (e) =>{
    if(e.target.value !== 'Alquiler'){
      setAlquilerOp(false);
    }
    setReservaTipo(e.target.value);
    
    const nextInput = document.getElementById('fecha');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
  }

  const handleDayChange = (e) =>{
    
    console.log(e.target.value)
    setDia(e.target.value);
    const nextInput = document.getElementById('horaInicio');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
  }


  const handleSubmitContinue = (e) =>{
    e.preventDefault();
    setAlquilerOp(true);
  }

  const canchasDisponibles = () =>{
    //este algoritmo se por un lado se queda con los nombres de las canchas no disponibles y luego devuelve los nombres de las canchas que no aparecen en el primer arrreglo
    const nombresCanchasNoDisponibles = reservas.map((reserva) => 
    {
      if((reserva.dia === dia)&&((horas.indexOf(horaFin) >= horas.indexOf(reserva.horaInicio))&&(horas.indexOf(horaInicio) <= horas.indexOf(reserva.horaFin)))){
        return reserva.cancha
      }
    }).filter((el) => el !== undefined);

    return canchas.filter((cancha) => nombresCanchasNoDisponibles.indexOf(cancha.nombre) === -1 ).map((el) => el.nombre)

  }

  const handleSetHoraInicio = (e) =>{
    setHoraInicio(e.target.value);
  }

  const handleSetHoraFin = (e) =>{
    setHoraFin(e.target.value)
  }

 

  
  const handleAddReserva = () =>{
    const newReserva = {
      'tipo': reservaTipo,
      'hora_ini': horaInicio,
      'hora_fin': horaFin,
      'nombre': nombre,
      'telefono': telefono,
      'fecha': dia.replaceAll('-',''),
      // 'cancha': cancha
      'cancha_id': 2
    }
    // setReservas([...reservas, newReserva ])

    const formData = new FormData();
    for ( var key in newReserva ) {
      formData.append(key, newReserva[key]);
    }
   
    //hacer el post y agregar el mensaje de confirmacion  
    const requestOptions={
      method: 'POST',
      body:  formData 
   } ;
   fetch(`${URL_BASE}reserva`, requestOptions)
      .then(response => {
        return response.json()
      })

    navigate('../inicio');
    console.log(newReserva);
  }

  
  return (
    <div id='reservas-component'>
        <NavBar title={'Reservas'}/>
        <div id='reserva-nuevaReserva'>
            <h2>Nueva reserva</h2>
            <form action="" id='reserva-form' onSubmit={handleSubmitContinue}  >
                <SelectComponent className={'inputReserva'} id={''} onChange={handleTypeChange} options={['Alquiler']} deshabilitado={false} />
                <InputComponent type={'date'} id={'fecha'} className={'inputReserva'} placeholder={'Fecha'} onChangeFuncion={handleDayChange} deshabilitado={true} min={today}/>
                
                
                {/*  LA IDEA ES USAR LOS COMENTADOS
                <SelectComponent className={'inputReserva'} id={'horaInicio'} onChange={handleSetHoraInicio} options={horas} deshabilitado={false}/>
                <SelectComponent className={'inputReserva'} id={'horaInicio'} onChange={handleSetHoraFin} options={horas} deshabilitado={false}/> */}
                
                <SelectHoraInicio id={'horaInicio'}  className={'inputReserva'} setHoraInicio={setHoraInicio}  />
                <SelectHoraFin  id={'horaFin'} className={'inputReserva'} setHoraFin={setHoraFin} horaInicio={horaInicio}/>         
                {alquilerOp ? 
                <AlquilerFormComponent active={alquilerOp} canchas={canchasDisponibles()} setCancha={setCancha} setActive={setAlquilerOp} handleAddReserva={handleAddReserva} setNombre={setNombre} setTelefono={setTelefono}/>
                :
                <button id='continue-btn' disabled> <FontAwesomeIcon id='next-icon' icon={faChevronRight}  /> </button>
                }
           </form>
        </div>
    </div>
  )
}

export default Reservas