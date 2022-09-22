import React from 'react'
import { useState } from 'react'
//styles
import '../styles/reservas.css'

//hora
import SelectHoraInicio from '../components/SelectHoraInicio'
import SelectHoraFin from '../components/SelectHoraFin'
//components
import NavBar from './NavBar'
import AlquilerFormComponent from '../components/AlquilerFormComponent'

//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'






const Reservas = ({canchas, reservas, setReservas}) => {

  const [alquilerOp, setAlquilerOp] = useState(false);
  //a futuro vamos a tener un tipo reserva por aca.
  const [reservaTipo, setReservaTipo] = useState("");
  const [dia, setDia] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [cancha, setCancha] = useState("");
  

  //alquiler
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");


  const handleTypeChange = (e) =>{
    if(e.target.value !== 'Alquiler'){
      setAlquilerOp(false);
    }
    setReservaTipo(e.target.value);
    
    const nextInput = document.getElementById('fecha');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
  }

  const handleDayChange = (e) =>{
    setDia(e.target.value);
    const nextInput = document.getElementById('horainicio');
    e.target.value === "" ? nextInput.disabled = true: nextInput.disabled = false;  
  }


  const handleSubmitContinue = (e) =>{
    e.preventDefault();
    setAlquilerOp(true);
    
  }

  
  const handleAddReserva = () =>{
    const newReserva = {'type': reservaTipo, 'horaInicio': horaInicio, 'horaFin': horaFin, 'nombre': nombre, 'telefono': telefono, 'dia': dia, 'cancha': cancha}
    setReservas([...reservas, newReserva ])
    
    console.log(newReserva);
  }

  
  return (
    <div id='reservas-component'>
        <NavBar title={'Reservas'}/>
        <div id='reserva-nuevaReserva'>
            <h2>Nueva reserva</h2>
            <form action="" id='reserva-form' onSubmit={handleSubmitContinue} >
                <select name="" id="" className='inputReserva' onChange={handleTypeChange}>
                   <option value="">Nada</option>
                   <option value="Alquiler">Alquiler</option>
                </select>  

                
                <input type="date" name="" id="fecha" className='inputReserva'  placeholder="Fecha" disabled  onChange={handleDayChange}/>
                
                <SelectHoraInicio id={'horaInicio'} className={'inputReserva'} setHoraInicio={setHoraInicio}/>
                <SelectHoraFin  id={'horaInicio'} className={'inputReserva'} setHoraFin={setHoraFin} horaInicio={horaInicio}/>
                
                {alquilerOp ? 
                <AlquilerFormComponent active={alquilerOp} canchas={canchas}   setCancha={setCancha} setActive={setAlquilerOp} handleAddReserva={handleAddReserva} setNombre={setNombre} setTelefono={setTelefono}/>
                :
                <button id='continue-btn'> <FontAwesomeIcon id='next-icon' icon={faChevronRight} /> </button>
                }
                

                
                          
            </form>
        </div>
    </div>
  )
}

export default Reservas